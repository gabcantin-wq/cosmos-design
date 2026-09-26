"""Comptages de référence et test d'une correspondance candidate.

Les configurations sont des entrées NIST ; aucun calcul de 4df n'est effectué.
Les rebonds suivent uniquement les hypothèses conditionnelles du chapitre 11.
"""
from fractions import Fraction
from pathlib import Path
import json

L = {'s': 0, 'p': 1, 'd': 2, 'f': 3}
XE = [('1s', 2), ('2s', 2), ('2p', 6), ('3s', 2), ('3p', 6),
      ('3d', 10), ('4s', 2), ('4p', 6), ('4d', 10), ('5s', 2), ('5p', 6)]
CASES = [
    ('He-4', 2, 2, [('1s', 2)], 'helium'),
    ('Au-197', 79, 118, XE + [('4f', 14), ('5d', 10), ('6s', 1)], 'gold'),
    ('Pt-195', 78, 117, XE + [('4f', 14), ('5d', 9), ('6s', 1)], 'platinum'),
]


def count_subshells(config):
    assert len({label for label, _ in config}) == len(config)
    result = []
    for label, population in config:
        capacity = 2*(2*L[label[-1]]+1)
        assert 0 < population <= capacity
        result.append({'subshell': label, 'electrons': population,
                       'capacity': capacity, 'closed': population == capacity})
    return result


def main():
    results = []
    for name, z, n, config, page in CASES:
        subshells = count_subshells(config)
        assert sum(s['electrons'] for s in subshells) == z
        closed = sum(s['closed'] for s in subshells)
        up_per_column = Fraction(2*z+n, 3)
        down_per_column = Fraction(z+2*n, 3)
        doubles = down_per_column-up_per_column
        singles = 2*up_per_column-down_per_column
        assert singles == z and doubles == Fraction(n-z, 3)
        assert singles+doubles == up_per_column
        assert singles+2*doubles == down_per_column
        assert all(v.denominator == 1 and v >= 0 for v in
                   (up_per_column, down_per_column, doubles, singles))
        results.append({
            'atom': name, 'Z': z, 'N': n, 'subshells': subshells,
            'occupied_subshells': len(subshells), 'closed_subshells': closed,
            'candidate_U_per_column': int(up_per_column),
            'candidate_D_per_column': int(down_per_column),
            'candidate_single_rebounds': int(singles),
            'candidate_double_rebounds': int(doubles),
            'doubles_equal_closed_subshells': doubles == closed,
            'source': f'https://physics.nist.gov/PhysRefData/Handbook/Tables/{page}table1.htm',
        })
    assert [(r['closed_subshells'], r['candidate_double_rebounds']) for r in results] == [(1, 0), (13, 13), (12, 13)]
    assert results[1]['occupied_subshells'] == 14
    # Au : les sous-couches pleines imposent leur occupation double dans la
    # représentation orbitale usuelle ; 6s a un seul électron.
    au_closed_orbitals = sum(s['capacity']//2 for s in results[1]['subshells'] if s['closed'])
    au_singly_occupied = sum(s['electrons'] == 1 for s in results[1]['subshells'])
    assert (au_closed_orbitals, au_singly_occupied) == (39, 1)
    report = {
        'status': 'PASS — comptages et contre-exemples vérifiés',
        'cases': results,
        'Au_spatial_orbitals_in_configuration_description': {
            'doubly_occupied': au_closed_orbitals,
            'singly_occupied': au_singly_occupied,
            'occupied_total': au_closed_orbitals+au_singly_occupied,
        },
        'algebra': 'Sous les hypothèses du chapitre 11 : R1=Z, R2=(N-Z)/3.',
        'verdict': 'La règle universelle R2=nombre de sous-couches fermées échoue pour He-4 et Pt-195.',
        'scope': 'Le lien général proposé par Gabriel reste ouvert ; aucune géométrie, occupation ou dynamique de 4df dérivée.',
    }
    Path(__file__).with_name('RESULTATS_ORBITALES_REBONDS.json').write_text(
        json.dumps(report, ensure_ascii=False, indent=2)+'\n', encoding='utf-8')
    print(json.dumps({'status': 'PASS', 'comparisons': [
        {'atom': r['atom'], 'closed_subshells': r['closed_subshells'],
         'candidate_doubles': r['candidate_double_rebounds']} for r in results],
         'gold_orbitals': au_closed_orbitals+au_singly_occupied}))


if __name__ == '__main__':
    main()
