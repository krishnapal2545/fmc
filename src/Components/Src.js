export default function source(choice) {
    let start = 0;
    switch (choice) {
        case 0:
            start = 4;
            break;
        case 1:
            start = 5;
            break;
        case 3:
            start = 2;
            break;
        default: start = 0;
    }
    return start;
}
