"""Audit conditionnel de comptages, sans image ni simulation physique de 4df.

Références : ../sources/REFERENCES_AUDIT_ATOMES_LOURDS.json.
La répartition temporelle et sa continuation sont des candidats GPT.
"""
from collections import Counter
from fractions import Fraction
from itertools import product
from pathlib import Path
import json

ROOT = Path(__file__).resolve().parent.parent
L = {'s': 0, 'p': 1, 'd': 2, 'f': 3}


def orbital_counts(element):
    z = element['Z']
    pair_min = pair_max = closed = 0
    for subshell in element['configuration']:
        n, ell, q = subshell['n'], L[subshell['l_letter']], subshell['electrons']
        g = 2*ell+1
        assert 0 <= ell < n and 0 < q <= 2*g
        pair_min += max(0, q-g)
        pair_max += q//2
        closed += q == 2*g
    assert sum(s['electrons'] for s in element['configuration']) == z
    return {'closed_subshells': closed, 'occupied_subshells': len(element['configuration']),
            'paired_spatial_orbitals_min': pair_min, 'paired_spatial_orbitals_max': pair_max,
            'singly_occupied_min': z-2*pair_max, 'singly_occupied_max': z-2*pair_min,
            'occupied_spatial_orbitals_min': z-pair_max, 'occupied_spatial_orbitals_max': z-pair_min}


def construct_grid(z, n):
    a = z+n
    u, d = 2*z+n, z+2*n
    assert n >= z > 0
    q, remainder = divmod(u, 3)
    column_u = [q+int(j < remainder) for j in range(3)]
    u0, u1, u2 = column_u
    groups = [(u1, 'DUDU'), (z, 'UDUD'), (u0-z, 'UDDD'), (u2-z, 'DDUD')]
    assert min(count for count, _ in groups) >= 0
    assert sum(count for count, _ in groups) == a
    # Une continuation sur quatre lectures, vérifiée aussi sur le raccord
    # terminal -> initial. Deux fenêtres de trois lectures partagent leur bord.
    rows = [pattern for count, pattern in groups for _ in range(count)]
    assert all(len(row) == 4 and set(row) <= {'U', 'D'} for row in rows)
    actual_u = [sum(row[j] == 'U' for row in rows) for j in range(4)]
    assert actual_u == [u0, u1, u2, u1]
    assert max(actual_u)-min(actual_u) <= 1
    for start in (0, 2):
        window = [row[(start+j)%4] for row in rows for j in range(3)]
        assert Counter(window) == {'U': u, 'D': d}
    for row in rows:
        assert all(not (row[j] == row[(j+1)%4] == 'U') for j in range(4))
        assert row.count('U') > 0

    transitions = []
    for j in range(4):
        nxt = (j+1)%4
        sources = [i for i,row in enumerate(rows) if row[j] == 'D']
        targets = [i for i,row in enumerate(rows) if row[nxt] == 'U']
        # Chaque UP cible possède son propre DOWN parmi ses soutiens.
        assert set(targets) <= set(sources)
        extra = sorted(set(sources)-set(targets))
        assert len(extra) <= len(targets)
        edges = [(i,i) for i in targets] + list(zip(extra, targets))
        out_degree, in_degree = Counter(i for i,k in edges), Counter(k for i,k in edges)
        assert set(out_degree) == set(sources)
        assert set(in_degree) == set(targets)
        assert all(degree == 1 for degree in out_degree.values())
        assert all(degree in (1,2) for degree in in_degree.values())
        assert all(rows[i][j] == 'D' and rows[k][nxt] == 'U' for i,k in edges)
        singles, doubles = sum(v == 1 for v in in_degree.values()), sum(v == 2 for v in in_degree.values())
        assert singles+doubles == actual_u[nxt]
        assert singles+2*doubles == a-actual_u[j]
        assert doubles == a-actual_u[j]-actual_u[nxt]
        transitions.append({'from_col': j, 'to_col': nxt, 'single_rebounds': singles,
                            'double_rebounds': doubles, 'verified_support_links': len(edges)})
    assert transitions[0]['double_rebounds'] == u2-z
    assert transitions[1]['double_rebounds'] == u0-z
    return {'identities': a, 'groups_four_positions': [{'count': c, 'pattern': p} for c,p in groups],
            'U_first_window': column_u, 'D_first_window': [a-x for x in column_u],
            'U_four_positions': actual_u, 'transitions': transitions,
            'shared_boundary': 'La lecture 2 est commune aux fenêtres (0,1,2) et (2,3,4), avec 4 identique à 0 dans ce candidat.'}


def ratio_interval(numerator, low_denominator, high_denominator):
    assert 0 < low_denominator <= high_denominator
    return (Fraction(numerator, high_denominator), Fraction(numerator, low_denominator))


def frac_text(value):
    value = Fraction(value)
    return str(value.numerator) if value.denominator == 1 else f'{value.numerator}/{value.denominator}'


def main():
    source = json.loads((ROOT/'sources'/'REFERENCES_AUDIT_ATOMES_LOURDS.json').read_text(encoding='utf-8'))
    cases = []
    ratio_sets = {name: [] for name in ('closed_subshells', 'occupied_subshells', 'occupied_spatial_orbitals', 'paired_spatial_orbitals')}
    verified_states = verified_links = 0
    for element in source['elements']:
        z = element['Z']
        occupation = orbital_counts(element)
        for isotope in element['isotopes']:
            a = isotope['A']
            n = a-z
            u, d = 2*z+n, z+2*n
            assert u+d == 3*a and d-u == n-z and 2*u-d == 3*z
            grid = construct_grid(z,n)
            verified_states += 4*a
            verified_links += sum(t['verified_support_links'] for t in grid['transitions'])
            # L'invariant vaut pour tout nombre de paires compatible avec la
            # configuration, sans choisir une occupation spatiale d'une couche ouverte.
            invariant_values = set()
            paired_invariant_values = set()
            for pairs in range(occupation['paired_spatial_orbitals_min'], occupation['paired_spatial_orbitals_max']+1):
                singles = z-2*pairs
                invariant_values.add(Fraction(2*u-d, 2*pairs+singles))
                paired_invariant_values.add(Fraction(2*u-d-3*singles, pairs))
            assert invariant_values == {Fraction(3)}
            assert paired_invariant_values == {Fraction(6)}
            r_formal = Fraction(n-z,3)
            ratios = {}
            for name in ratio_sets:
                if name in ('closed_subshells', 'occupied_subshells'):
                    low = high = occupation[name]
                else:
                    low, high = occupation[name+'_min'], occupation[name+'_max']
                interval = ratio_interval(r_formal, low, high)
                ratio_sets[name].append(interval)
                ratios[name] = [frac_text(v) for v in interval]
            cases.append({'atom': f"{element['symbol']}-{a}", 'Z': z, 'N': n, 'A': a,
                          'representative': a == element['representative_A'], 'u_valence': u, 'd_valence': d,
                          **occupation, 'old_equal_column_value_R2': frac_text(r_formal),
                          'equal_columns_integer': r_formal.denominator == 1,
                          'constant_K': 3, 'constant_K_paired': 6, 'ratios_formal_R2_to_counts': ratios,
                          'integer_grid': grid, 'source_url': element['source_url']})

    tests = {}
    for name, intervals in ratio_sets.items():
        common_low = max(low for low,high in intervals)
        common_high = min(high for low,high in intervals)
        tests[name] = {'common_constant_possible': common_low <= common_high,
                       'common_lower_bound': frac_text(common_low), 'common_upper_bound': frac_text(common_high),
                       'sample_range_min': float(min(low for low,high in intervals)),
                       'sample_range_max': float(max(high for low,high in intervals))}
        assert common_low > common_high, name

    lookup = {case['atom']: case for case in cases}
    # Même élément, occupations fermées identiques : le nombre de doubles varie.
    hg198, hg204 = lookup['Hg-198'], lookup['Hg-204']
    for key in occupation:
        assert hg198[key] == hg204[key]
    set198 = {t['double_rebounds'] for t in hg198['integer_grid']['transitions']}
    set204 = {t['double_rebounds'] for t in hg204['integer_grid']['transitions']}
    assert set198 == {12,13} and set204 == {14,15} and set198.isdisjoint(set204)
    assert all(t['double_rebounds'] == 13 for t in lookup['Au-197']['integer_grid']['transitions'])
    # Le triplet est une fenêtre : si on l'imposait comme période de longueur 3
    # avec aucun UP adjacent, chaque ligne aurait au plus un UP, or u=A+Z>A.
    cyclic_three = [p for p in product('UD', repeat=3) if all(not (p[j] == p[(j+1)%3] == 'U') for j in range(3))]
    assert max(p.count('U') for p in cyclic_three) == 1

    summary = {'elements': len(source['elements']), 'isotopes': len(cases),
               'equal_columns_rejected_noninteger': sum(not c['equal_columns_integer'] for c in cases),
               'integer_grids_pass': len(cases), 'periodic_bookkeeping_extensions_pass': len(cases),
               'verified_state_cells_in_four_positions': verified_states,
               'verified_support_links_in_four_transitions': verified_links,
               'invariant_K': 3, 'invariant_K_paired': 6, 'orbital_ratio_tests': tests}
    report = {'status': 'PASS — audit algébrique et combinatoire conditionnel', 'summary': summary,
              'hypotheses': ['Comptes de valence identifiés aux totaux de trois lectures pour le candidat temporel.',
                             'A=Z+N identités présentes, une valeur U ou D par lecture.',
                             'Pas de UP successifs; DOWN peut persister.',
                             'Chaque DOWN soutient une seule cible au raccord; chaque UP a un ou deux soutiens.',
                             'Répartition des marges la plus uniforme possible; ordre des restes conventionnel.',
                             'Extension périodique sur quatre lectures pour vérifier le recouvrement; aucune stabilité physique déduite.'],
              'orbital_convention': 'Bornes combinatoires de paires spatiales à configuration nl fixée. Aucune décomposition unique de l’état corrélé ni couplage LS exact imposé aux couches ouvertes des atomes lourds.',
              'formula_K': '(2*u_valence-d_valence)/(2*P+S)=3, avec P orbitales doubles et S simples dans un atome neutre.',
              'formula_K_paired': '(2*u_valence-d_valence-3*S)/P=6; même identité réécrite par orbitale doublement occupée.',
              'invariant_origin': 'Composition de valence et neutralité : identité de comptage connue, pas constante physique nouvelle ni dérivation de 4df.',
              'verdict_double_ratios': 'Aucune constante universelle dans les quatre normalisations examinées; témoin Hg-198/Hg-204 aux mêmes occupations.',
              'limits': 'Le pont temporel avec la valence et le contrôle H restent ouverts. La relation de soutien et la période quatre sont des constructions GPT.',
              'cases': cases}
    (ROOT/'calculs'/'RESULTATS_AUDIT_ATOMES_LOURDS.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    print(json.dumps(summary,ensure_ascii=False))
    for name in ('Ba-138','Yb-174','Pt-195','Au-197','Hg-198','Hg-200','Hg-202','Hg-204','Pb-208','Th-232','U-235','U-238'):
        c = lookup[name]
        print(json.dumps({'atom':name, 'P':[c['paired_spatial_orbitals_min'],c['paired_spatial_orbitals_max']],
                          'O':[c['occupied_spatial_orbitals_min'],c['occupied_spatial_orbitals_max']],
                          'closed':c['closed_subshells'], 'u':c['u_valence'], 'd':c['d_valence'],
                          'Ucolumns':c['integer_grid']['U_first_window'],
                          'Dcolumns':c['integer_grid']['D_first_window'],
                          'R2':[t['double_rebounds'] for t in c['integer_grid']['transitions'][:2]]}))


if __name__ == '__main__':
    main()
