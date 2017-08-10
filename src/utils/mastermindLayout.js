export default function createMastermindLayout() {
    const rowLength = 10;
    const mastermindLayout = [];
    for (let i = 0; i < rowLength; i++) {
        mastermindLayout[i] = {};
        mastermindLayout[i].colored = ["white", "white", "white", "white"];
        mastermindLayout[i].feedback = ["white", "white", "white", "white"];
    }
    return mastermindLayout;
}
