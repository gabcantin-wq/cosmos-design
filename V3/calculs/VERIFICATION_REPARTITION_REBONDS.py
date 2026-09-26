"""Construction combinatoire conditionnelle, pas une simulation physique de 4df.

Statut : [INFÉRENCE GPT — NON VALIDÉE]. Voir le chapitre 11 pour les hypothèses.
Exécution : python VERIFICATION_REPARTITION_REBONDS.py
"""
from collections import Counter
from itertools import product
from pathlib import Path
import json


def expand(groups):
    rows = []
    for count, pattern in groups:
        for _ in range(count):
            rows.append({'id': f'S{len(rows)+1:03}', 'states': list(pattern)})
    return rows


def inspect(rows, expected_per_column, expected_total):
    assert len({r['id'] for r in rows}) == len(rows), 'Identité répétée'
    assert all(len(r['states']) == 3 for r in rows)
    assert all(state in ('U', 'D') for r in rows for state in r['states'])
    assert all(not (a == b == 'U') for r in rows for a, b in zip(r['states'], r['states'][1:]))
    columns = [dict(Counter(r['states'][j] for r in rows)) for j in range(3)]
    assert columns == expected_per_column, columns
    total = dict(Counter(s for r in rows for s in r['states']))
    assert total == expected_total, total
    return columns, total


def support_links(rows, additions):
    """Chaque futur UP a son propre DOWN ; quelques DOWN ajoutent un soutien.

    Dans cet exemple seulement, chaque DOWN est utilisé une fois par raccord.
    Une flèche de soutien ne change ni l'identité ni l'état du sillon source.
    """
    links = []
    for j in range(2):
        for row in rows:
            if row['states'][j+1] == 'U':
                links.append({'from_id': row['id'], 'from_col': j,
                              'to_id': row['id'], 'to_col': j+1})
        for source, target in additions[j]:
            links.append({'from_id': f'S{source:03}', 'from_col': j,
                          'to_id': f'S{target:03}', 'to_col': j+1})
    return links


def inspect_links(rows, links, expected_histogram):
    lookup = {r['id']: r['states'] for r in rows}
    assert len({tuple(sorted(e.items())) for e in links}) == len(links)
    histograms = []
    for j in range(2):
        edges = [e for e in links if e['from_col'] == j]
        incoming, outgoing = Counter(), Counter()
        for edge in edges:
            assert edge['to_col'] == j+1
            assert lookup[edge['from_id']][j] == 'D', 'Source non DOWN'
            assert lookup[edge['to_id']][j+1] == 'U', 'Cible non UP'
            outgoing[edge['from_id']] += 1
            incoming[edge['to_id']] += 1
        downs = {r['id'] for r in rows if r['states'][j] == 'D'}
        ups = {r['id'] for r in rows if r['states'][j+1] == 'U'}
        assert set(outgoing) == downs
        assert all(outgoing[s] == 1 for s in downs)
        assert set(incoming) == ups
        assert all(incoming[s] >= 1 for s in ups)
        histogram = dict(Counter(incoming.values()))
        assert histogram == expected_histogram, histogram
        histograms.append(histogram)
    return histograms


def main():
    helium = expand([(2, 'DUD'), (2, 'UDU')])
    gold = expand([(92, 'DUD'), (79, 'UDU'), (13, 'UDD'), (13, 'DDU')])
    hc, ht = inspect(helium, [{'U': 2, 'D': 2}]*3, {'U': 6, 'D': 6})
    gc, gt = inspect(gold, [{'U': 92, 'D': 105}]*3, {'U': 276, 'D': 315})
    he_links = support_links(helium, [[], []])
    au_links = support_links(gold, [
        [(185+k, 1+k) for k in range(13)],
        [(172+k, 185+k) for k in range(13)],
    ])
    hh = inspect_links(helium, he_links, {1: 2})
    gh = inspect_links(gold, au_links, {1: 79, 2: 13})

    # Vérification indépendante : énumérer toutes les multiplicités possibles
    # des motifs sans deux UP adjacents, sous les trois marges de l'or choisies.
    permitted = [''.join(p) for p in product('DU', repeat=3) if 'UU' not in ''.join(p)]
    assert set(permitted) == {'DDD', 'DDU', 'DUD', 'UDD', 'UDU'}
    solutions = []
    for n_udu in range(198):
        groups = {'DUD': 92, 'UDU': n_udu, 'UDD': 92-n_udu,
                  'DDU': 92-n_udu, 'DDD': n_udu-79}
        if min(groups.values()) < 0:
            continue
        candidate = expand([(count, pattern) for pattern, count in groups.items()])
        inspect(candidate, [{'U': 92, 'D': 105}]*3, {'U': 276, 'D': 315})
        solutions.append(groups)
    assert len(solutions) == 14

    # Adversaire : l'alternance stricte conserve les totaux de fenêtre mais
    # inverse l'asymétrie au centre. Elle n'impose pas les marges constantes.
    strict = expand([(118, 'DUD'), (79, 'UDU')])
    sc, st = inspect(strict,
                     [{'U': 79, 'D': 118}, {'U': 118, 'D': 79}, {'U': 79, 'D': 118}],
                     {'U': 276, 'D': 315})
    # Adversaire H : la lecture locale confirmée DUD n'a pas l'inventaire uud.
    h_local = dict(Counter('DUD'))
    h_valence = {'U': 2, 'D': 1}
    assert h_local != h_valence
    assert [p for p in permitted if Counter(p) == h_valence] == ['UDU']

    report = {
        'status': 'PASS — cohérence combinatoire conditionnelle seulement',
        'hypotheses': [
            'Les comptes de référence sont traités comme totaux cumulés sur trois colonnes.',
            'Nombre fixe de lignes, un état binaire à chaque colonne, sans case vide.',
            'Pour ces exemples : marges identiques dans les trois colonnes.',
            'Un UP revient au DOWN à la lecture suivante ; un DOWN peut persister.',
            'Dans les raccords construits : chaque DOWN soutient exactement un futur UP.',
            'Tout UP intérieur possède le DOWN de sa propre identité parmi ses soutiens.'
        ],
        'helium': {'identities': len(helium), 'columns': hc, 'totals': ht,
                   'supports_per_up_histograms': hh, 'rows': helium, 'links': he_links},
        'gold': {'identities': len(gold), 'columns': gc, 'totals': gt,
                 'supports_per_up_histograms': gh, 'rows': gold, 'links': au_links},
        'non_uniqueness': {'multiplicity_solutions': len(solutions), 'solutions': solutions},
        'strict_alternation_alternative': {'columns': sc, 'totals': st},
        'hydrogen_bridge_test': {'local_confirmed_DUD': h_local, 'valence_reference': h_valence,
                                'verdict': 'ÉCHEC de leur identification directe universelle.'},
        'limits': 'Aucune identité physique sillon=nucléon, aucune géométrie, force, durée ou stabilité déduite.'
    }
    destination = Path(__file__).with_name('RESULTATS_REPARTITION_REBONDS.json')
    destination.write_text(json.dumps(report, ensure_ascii=False, indent=2)+'\n', encoding='utf-8')
    print(json.dumps({k: report[k] for k in ('status', 'hydrogen_bridge_test')}, ensure_ascii=False))
    print(json.dumps({'He': hc, 'Au': gc, 'rebonds_Au': gh, 'solutions': len(solutions)}, ensure_ascii=False))


if __name__ == '__main__':
    main()
