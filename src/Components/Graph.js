export default function randomGraph(choice,I,ns) {
    let Graph = Array();
    switch (choice) {
        case 0:
            Graph = [
                [I, ns[1], I, I, ns[3], I, I, I, I, I, I],
                [ns[1], I, ns[2], ns[4], I, I, I, I, I, I, I],
                [I, ns[2], I, I, I, I, ns[5], I, I, I, I],
                [I, ns[4], I, I, I, ns[6], ns[7], I, I, I, I],
                [ns[3], I, I, I, I, ns[8], I, I, ns[11], I, I],
                [I, I, I, ns[6], ns[8], I, I, ns[9], I, I, I],
                [I, I, ns[5], ns[7], I, I, I, ns[10], I, I, ns[13]],
                [I, I, I, I, I, ns[9], ns[10], I, I, ns[12], I],
                [I, I, I, I, ns[11], I, I, I, I, ns[14], I],
                [I, I, I, I, I, I, I, ns[12], ns[14], I, ns[15]],
                [I, I, I, I, I, I, ns[13], I, I, ns[15], I]
            ];
            break;
        case 1:
            Graph = [
                [I, ns[1], I, I, I, ns[5], I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
                [ns[1], I, ns[2], I, I, I, ns[6], I, I, I, I, I, I, I, I, I, I, I, I, I, I],
                [I, ns[2], I, ns[3], I, I, I, ns[7], I, I, I, I, I, I, I, I, I, I, I, I, I],
                [I, I, ns[3], I, ns[4], I, I, I, ns[8], I, I, I, I, I, I, I, I, I, I, I, I],
                [I, I, I, ns[4], I, I, I, I, I, ns[9], I, I, I, I, I, I, I, I, I, I, I],
                [ns[5], I, I, I, I, I, ns[10], I, I, I, ns[13], I, I, I, I, I, I, I, I, I, I],
                [I, ns[6], I, I, I, ns[10], I, ns[11], I, I, I, ns[14], I, I, I, I, I, I, I, I, I],
                [I, I, ns[7], I, I, I, ns[11], I, I, I, I, I, ns[15], I, I, I, I, I, I, I, I],
                [I, I, I, ns[8], I, I, I, I, I, ns[12], I, I, ns[16], I, I, I, I, I, I, I, I],
                [I, I, I, I, ns[9], I, I, I, ns[12], I, I, I, I, I, I, I, ns[17], I, I, I, I],
                [I, I, I, I, I, ns[13], I, I, I, I, I, ns[18], I, ns[19], I, I, I, I, I, I, I],
                [I, I, I, I, I, I, ns[14], I, I, I, ns[18], I, I, I, ns[20], I, I, I, I, I, I],
                [I, I, I, I, I, I, I, ns[15], ns[16], I, I, I, I, I, I, ns[21], I, I, I, I, I],
                [I, I, I, I, I, I, I, I, I, I, ns[19], I, I, I, ns[22], I, I, ns[25], I, I, I],
                [I, I, I, I, I, I, I, I, I, I, I, ns[20], I, ns[22], I, ns[23], I, I, ns[26], I, I],
                [I, I, I, I, I, I, I, I, I, I, I, I, ns[21], I, ns[23], I, ns[24], I, I, ns[27], I],
                [I, I, I, I, I, I, I, I, I, ns[17], I, I, I, I, I, ns[24], I, I, I, I, ns[28]],
                [I, I, I, I, I, I, I, I, I, I, I, I, I, ns[25], I, I, I, I, ns[29], I, I],
                [I, I, I, I, I, I, I, I, I, I, I, I, I, I, ns[26], I, I, ns[29], I, ns[30], I],
                [I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, ns[27], I, I, ns[30], I, ns[31]],
                [I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, ns[28], I, I, ns[31], I]

            ];
            break;
        case 2:
            Graph = [
                [I, ns[1], I, I, I, ns[5], I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
                [ns[1], I, ns[2], I, I, I, ns[6], I, I, I, I, I, I, I, I, I, I, I, I, I, I],
                [I, ns[2], I, ns[3], I, I, I, ns[7], I, I, I, I, I, I, I, I, I, I, I, I, I],
                [I, I, ns[3], I, ns[4], I, I, I, ns[8], I, I, I, I, I, I, I, I, I, I, I, I],
                [I, I, I, ns[4], I, I, I, I, I, ns[9], I, I, I, I, I, I, I, I, I, I, I],
                [ns[5], I, I, I, I, I, ns[10], I, I, I, ns[13], I, I, I, I, I, I, I, I, I, I],
                [I, ns[6], I, I, I, ns[10], I, ns[11], I, I, I, ns[14], I, I, I, I, I, I, I, I, I],
                [I, I, ns[7], I, I, I, ns[11], I, I, I, I, I, ns[15], I, I, I, I, I, I, I, I],
                [I, I, I, ns[8], I, I, I, I, I, ns[12], I, I, ns[16], I, I, I, I, I, I, I, I],
                [I, I, I, I, ns[9], I, I, I, ns[12], I, I, I, I, I, I, I, ns[17], I, I, I, I],
                [I, I, I, I, I, ns[13], I, I, I, I, I, ns[18], I, ns[19], I, I, I, I, I, I, I],
                [I, I, I, I, I, I, ns[14], I, I, I, ns[18], I, I, I, ns[20], I, I, I, I, I, I],
                [I, I, I, I, I, I, I, ns[15], ns[16], I, I, I, I, I, I, ns[21], I, I, I, I, I],
                [I, I, I, I, I, I, I, I, I, I, ns[19], I, I, I, ns[22], I, I, ns[25], I, I, I],
                [I, I, I, I, I, I, I, I, I, I, I, ns[20], I, ns[22], I, ns[23], I, I, ns[26], I, I],
                [I, I, I, I, I, I, I, I, I, I, I, I, ns[21], I, ns[23], I, ns[24], I, I, ns[27], I],
                [I, I, I, I, I, I, I, I, I, ns[17], I, I, I, I, I, ns[24], I, I, I, I, ns[28]],
                [I, I, I, I, I, I, I, I, I, I, I, I, I, ns[25], I, I, I, I, ns[29], I, I],
                [I, I, I, I, I, I, I, I, I, I, I, I, I, I, ns[26], I, I, ns[29], I, ns[30], I],
                [I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, ns[27], I, I, ns[30], I, ns[31]],
                [I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, ns[28], I, I, ns[31], I]

            ];
            break;
        case 3:
            Graph = [
                [I, ns[1], I, I, I, ns[5], I, I, I, I, I, I, I, I, I, I, I, I, I, I, I],
                [ns[1], I, ns[2], I, I, I, ns[6], I, I, I, I, I, I, I, I, I, I, I, I, I, I],
                [I, ns[2], I, ns[3], I, I, I, ns[7], I, I, I, I, I, I, I, I, I, I, I, I, I],
                [I, I, ns[3], I, ns[4], I, I, I, ns[8], I, I, I, I, I, I, I, I, I, I, I, I],
                [I, I, I, ns[4], I, I, I, I, I, ns[9], I, I, I, I, I, I, I, I, I, I, I],
                [ns[5], I, I, I, I, I, ns[10], I, I, I, ns[13], I, I, I, I, I, I, I, I, I, I],
                [I, ns[6], I, I, I, ns[10], I, ns[11], I, I, I, ns[14], I, I, I, I, I, I, I, I, I],
                [I, I, ns[7], I, I, I, ns[11], I, I, I, I, I, ns[15], I, I, I, I, I, I, I, I],
                [I, I, I, ns[8], I, I, I, I, I, ns[12], I, I, ns[16], I, I, I, I, I, I, I, I],
                [I, I, I, I, ns[9], I, I, I, ns[12], I, I, I, I, I, I, I, ns[17], I, I, I, I],
                [I, I, I, I, I, ns[13], I, I, I, I, I, ns[18], I, ns[19], I, I, I, I, I, I, I],
                [I, I, I, I, I, I, ns[14], I, I, I, ns[18], I, I, I, ns[20], I, I, I, I, I, I],
                [I, I, I, I, I, I, I, ns[15], ns[16], I, I, I, I, I, I, ns[21], I, I, I, I, I],
                [I, I, I, I, I, I, I, I, I, I, ns[19], I, I, I, ns[22], I, I, ns[25], I, I, I],
                [I, I, I, I, I, I, I, I, I, I, I, ns[20], I, ns[22], I, ns[23], I, I, ns[26], I, I],
                [I, I, I, I, I, I, I, I, I, I, I, I, ns[21], I, ns[23], I, ns[24], I, I, ns[27], I],
                [I, I, I, I, I, I, I, I, I, ns[17], I, I, I, I, I, ns[24], I, I, I, I, ns[28]],
                [I, I, I, I, I, I, I, I, I, I, I, I, I, ns[25], I, I, I, I, ns[29], I, I],
                [I, I, I, I, I, I, I, I, I, I, I, I, I, I, ns[26], I, I, ns[29], I, ns[30], I],
                [I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, ns[27], I, I, ns[30], I, ns[31]],
                [I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, I, ns[28], I, I, ns[31], I]

            ];
            break;
        default: Graph = Array(20).fill(0);
    }//Switch over
    return Graph;
}