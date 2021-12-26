export default function randomLayout(choice,I,ns,S,D) {
    console.log(choice);
    let Map = Array();
    switch (choice) {
        case 0:
            Map = [
                ['pl', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, 'pl'],
                ['pl', I, 0, 0, 0, 0, ns[1], 0, 0, 0, 0, 0, 0, 0, 0, ns[2], 0, 0, 0, I, 'pl'],
                ['pl', I, 0, I, I, I, I, I, I, I, 0, I, I, I, I, I, I, I, 0, I, 'pl'],
                ['pl', I, 0, I, 'sk', 0, 0, 0, 0, I, ns[4], I, 0, 0, 0, 0, 0, I, 0, I, 'pl'],
                ['pl', I, 0, I, 0, 0, 'w', 0, 0, I, 0, I, 0, 0, 'w', 0, 'sk', I, 0, I, 'pl'],
                ['pl', I, 0, I, 0, 0, 0, 0, 0, I, 0, I, 0, 0, 0, 0, 0, I, 0, I, 'pl'],
                ['pl', I, ns[3], I, I, I, I, I, I, I, 0, I, I, I, I, I, I, I, ns[5], I, 'pl'],
                ['pl', I, 0, I, I, I, 0, ns[6], 0, 0, 0, 0, 0, ns[7], 0, I, I, I, 0, I, 'pl'],
                ['pl', I, 0, I, I, 0, 0, I, I, I, I, I, I, I, 0, 0, I, I, 0, I, 'pl'],
                ['pl', I, 0, I, 0, 0, I, 'ar', 0, 0, 0, 0, 0, 'ar', I, 0, 0, I, 0, I, 'pl'],
                [I, S, 0, 0, ns[8], I, I, 0, 0, 0, 'w', 0, 0, 0, I, I, 0, 0, D, I, 'pl'],
                ['pl', I, 0, I, 0, 0, I, 'ar', 0, 0, 0, 0, 0, 'ar', I, 0, 0, I, 0, I, 'pl'],
                ['pl', I, 0, I, I, 0, 0, I, I, I, I, I, I, I, 0, 0, I, I, 0, I, 'pl'],
                ['pl', I, 0, I, I, I, 0, ns[9], 0, 0, 0, 0, 0, ns[10], 0, I, I, I, 0, I, 'pl'],
                ['pl', I, 0, I, I, I, I, I, I, I, 0, I, I, I, I, I, I, I, 0, I, 'pl'],
                ['pl', I, ns[11], I, 0, 'sk', 0, 0, 0, I, 0, I, 0, 0, 0, 0, 0, I, ns[13], I, 'pl'],
                ['pl', I, 0, I, 0, 0, 'w', 0, 0, I, ns[12], I, 0, 0, 'w', 0, 0, I, 0, I, 'pl'],
                ['pl', I, 0, I, 0, 0, 0, 0, 0, I, 0, I, 0, 0, 'sk', 0, 0, I, 0, I, 'pl'],
                ['pl', I, 0, I, I, I, I, I, I, I, 0, I, I, I, I, I, I, I, 0, I, 'pl'],
                ['pl', I, 0, 0, 0, 0, ns[14], 0, 0, 0, 0, 0, 0, 0, 0, ns[15], 0, 0, 0, I, 'pl'],
                ['pl', I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, 'pl'],
            ];
            break;
        case 1:
            Map = [
                [I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
                [I, I, 0, 0, 0, ns[1], 0, 0, 0, 0, ns[2], 0, 0, 0, ns[3], 0, 0, ns[4], 0, 0, I],
                [I, I, 0, I, I, I, I, I, 0, I, I, I, 0, I, I, 0, I, I, I, 0, I],
                [I, I, ns[5], I, I, I, I, I, 0, I, I, I, 0, I, I, 0, I, I, I, 0, I],
                [I, I, 0, I, I, I, I, I, ns[6], I, I, I, ns[7], I, I, ns[8], I, I, I, ns[9], I],
                [I, I, 0, 0, 0, ns[10], I, I, 0, I, I, I, 0, I, I, 0, I, I, I, 0, I],
                [I, S, 0, I, I, 0, I, I, 0, I, I, I, 0, I, I, 0, I, I, I, 0, I],
                [I, I, 0, I, I, 0, 0, 0, 0, 0, ns[11], 0, 0, I, I, 0, 0, ns[12], 0, 0, I],
                [I, I, ns[13], I, I, I, I, I, ns[14], I, I, I, 0, I, I, ns[16], I, I, I, 0, I],
                [I, I, 0, I, I, I, I, I, 0, I, I, I, ns[15], I, I, 0, I, I, I, 0, I],
                [I, I, 0, 0, 0, ns[18], 0, 0, 0, I, I, I, 0, 0, 0, 0, I, I, I, ns[17], I],
                [I, I, 0, I, I, I, I, I, ns[20], I, I, I, I, I, I, 0, I, I, I, 0, I],
                [I, I, ns[19], I, I, I, I, I, 0, I, I, I, I, I, I, ns[21], I, I, I, 0, I],
                [I, I, 0, I, I, I, I, I, 0, 0, 0, 0, ns[23], 0, 0, 0, 0, ns[24], 0, D, I],
                [I, I, 0, 0, 0, ns[22], 0, 0, 0, I, I, I, I, I, I, 0, I, I, I, 0, I],
                [I, I, 0, I, I, I, I, I, 0, I, I, I, I, I, I, 0, I, I, I, 0, I],
                [I, I, ns[25], I, I, I, I, I, ns[26], I, I, I, I, I, 0, ns[27], I, I, I, ns[28], I],
                [I, I, 0, I, I, I, I, I, 0, I, I, I, I, I, 0, I, I, I, I, 0, I],
                [I, I, 0, 0, 0, ns[29], 0, 0, 0, 0, 0, 0, ns[30], 0, 0, 0, 0, ns[31], 0, 0, I],
                [I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I]
            ]
            break;
        case 2:
            Map = [
                [I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
                [I, I, 'a1', 'a2', 'a2', ns[1], 'a2', 'a2', 'a12', 'a2', ns[2], 'a2', 'a12', 'a2', 'a2', 'a12', 'a2', ns[4], 'a2', 'a7', I],
                [I, I, 'sp', I, I, I, I, I, 'sp', I, I, I, 'sp', I, I, 'sp', I, I, I, 'sp', I],
                [I, I, 'sp', I, I, I, I, I, 'sp', I, I, I, 'sp', I, I, 'sp', I, I, I, 'sp', I],
                [I, I, 'sp', I, I, I, I, I, ns[6], I, I, I, ns[7], I, I, 'sp', I, I, I, ns[9], I],
                [I, I, 'a13', ns[32], 'a2', 'a7', I, I, 'sp', I, I, I, 'sp', I, I, ns[36], I, I, I, 'sp', I],
                [I, S, 'sp', I, I, 'sp', I, I, 'sp', I, I, I, 'sp', I, I, 'sp', I, I, I, 'sp', I],
                [I, I, 'sp', I, I, 'a6', 'a2', 'a2', 'a11', ns[33], 'a2', 'a2', 'a9', I, 'a1', 'a10', 'a2', ns[35], 'a2', 'a9', I],
                [I, I, 'sp', I, I, I, I, I, 'sp', I, I, I, 'sp', I, 'sp', I, I, I, I, 'sp', I],
                [I, I, 'sp', I, I, I, I, I, 'sp', I, I, I, 'sp', I, ns[39], I, I, I, I, 'sp', I],
                [I, I, 'a13', ns[31], 'a2', 'a2', 'a2', 'a2', 'a9', I, I, I, 'a6', 'a2', 'a10', 'a7', I, I, I, ns[17], I],
                [I, I, 'sp', I, I, I, I, I, 'sp', I, I, I, I, I, I, 'sp', I, I, I, 'sp', I],
                [I, I, 'sp', I, I, I, I, I, 'sp', I, I, I, I, I, I, 'sp', I, I, I, 'sp', I],
                [I, I, 'sp', I, I, I, I, I, 'a13', ns[11], 'a2', 'a2', ns[46], 'a2', 'a2', 'a11', ns[7], 'a2', 'a2', D, I],
                [I, I, 'a13', ns[22], 'a2', 'a2', 'a2', 'a2', 'a9', I, I, I, I, I, I, 'sp', I, I, I, 'sp', I],
                [I, I, 'sp', I, I, I, I, I, 'sp', I, I, I, I, I, I, 'sp', I, I, I, 'sp', I],
                [I, I, 'sp', I, I, I, I, I, ns[26], I, I, I, I, 'a1', 'a2', 'a10', 'a2', ns[37], 'a2', 'a9', I],
                [I, I, 'sp', I, I, I, I, I, 'sp', I, I, I, I, 'sp', I, I, I, I, I, 'sp', I],
                [I, I, 'a6', 'a2', 'a2', ns[29], 'a2', 'a2', 'a10', 'a2', 'a2', ns[40], 'a2', 'a10', 'a2', 'a2', 'a2', 'a2', 'a2', ns[31], I],
                [I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I]
            ];
            break;
        case 3:
            Map = [
                ['pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl'],
                ['pl',I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, 'pl'],
                ['pl',I, I, I, I, I, I, I, I, I, I, I, I, 0, 0, 0, 0, 0, 0, 0, I, I, I, I, I, I, I, I, I, I, 'pl'],
                ['pl',I, 0, 0, ns[1], 0, 0, 0, 0, ns[3], 0, 0, 0, 0, 0, S, 0, 0, 0, 0, 0, ns[5], 0, 0, 0, 0, ns[11], 0, 0, I, 'pl'],
                ['pl',I, 0, I, I, I, 0, I, I, I, I, 0, 0, 0, 0, 0, 0, 0, 0, 0, I, I, I, I, 0, I, I, I, 0, I, 'pl'],
                ['pl',I, 0, I, I, I, 0, I, I, I, I, I, 0, 0, 0, 0, 0, 0, 0, I, I, I, I, I, ns[12], I, I, I, ns[13], I, 'pl'],
                ['pl',I, ns[2], I, I, I, ns[4], 0, I, I, I, I, I, 0, I, I, I, 0, I, I, I, I, I, I, 0, I, I, I, 0, I, 'pl'],
                ['pl',I, 0, I, I, I, I, 0, I, I, I, I, I, ns[6], I, I, I, ns[10], I, I, I, I, I, 0, 0, 0, ns[20], 0, 0, I, 'pl'],
                ['pl',I, 0, I, I, I, I, 0, I, I, I, I, I, 0, I, I, I, 0, I, I, I, I, I, 0, I, I, I, I, 0, I, 'pl'],
                ['pl',I, 0, 0, ns[14], 0, 0, 0, ns[16], 0, 0, 0, ns[17], 0, I, I, I, 0, ns[19], 0, 0, 0, 0, ns[21], I, I, I, I, 0, I, 'pl'],
                ['pl',I, ns[15], I, I, I, I, I, I, I, 0, I, I, I, I, I, I, I, I, I, 0, I, I, I, I, I, I, I, ns[22], I, 'pl'],
                ['pl',I, 0, I, I, I, I, I, I, I, 0, 0, 0, I, I, I, I, I, I, I, ns[27], I, I, I, I, I, I, I, 0, I, 'pl'],
                ['pl',I, 0, 0, 0, ns[23], 0, 0, 0, I, I, I, ns[18], I, I, I, I, I, I, I, 0, 0, 0, 0, ns[28], 0, 0, 0, 0, I, 'pl'],
                ['pl',I, 0, I, I, I, I, I, 0, 0, 0, 0, 0, I, I, I, I, I, I, I, 0, I, I, I, I, I, I, I, 0, I, 'pl'],
                ['pl',I, ns[24], I, I, I, I, I, I, I, 0, I, I,I, I, I, I, 0, ns[29], 0, 0, 0, ns[30], I, I, I, I, I, ns[31], I, 'pl'],
                ['pl',I, 0, I, I, I, I, I, ns[25], 0, 0, 0, 0, ns[26], I, I, I, 0, I, I, I, I, 0, I, I, I, I, I, 0, I, 'pl'],
                ['pl',I, 0, I, I, I, I, I, 0, I, I, I, I, 0, 0, 0, 0, 0, I, I, I, I, 0, 0, 0, ns[38], 0, 0, 0, I, 'pl'],
                ['pl',I, 0, 0, 0, ns[32], 0, 0, 0, 0, 0, I, I, I, I, 0, I, I, I, I, 0, 0, 0, I, I, I, I, I, 0, I, 'pl'],
                ['pl',I, 0, I, I, I, I, I, I, I, 0, I, I, 0, I, ns[35], I, 0, I, I, 0, I, I, I, I, I, I, I, 0, I, 'pl'],
                ['pl',I, 0, I, I, I, I, I, I, I, ns[34], I, I, I, I, 0, I, I, I, I, ns[36], I, I, I, I, I, I, I, 0, I, 'pl'],
                ['pl',I, 0, 0, 0, ns[33], 0, 0, 0, 0, 0, 0, 0, 0, 0, D, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ns[37], 0, 0, I, 'pl'],
                ['pl',I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, 'pl'],
                ['pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl', 'pl'],
            ];
            break;
        default: Map = Array(20).fill(0);
    }
    return Map;
}