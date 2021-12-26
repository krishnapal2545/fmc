export default function goal(choice) {
    let end = 0;
    switch (choice) {
        case 0:
            end = 6;
            break;
        case 1:
            end = 16;
            break;
        case 3:
            end = 22;
            break;
        default: end = 0;
    }
    return end;
}