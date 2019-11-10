function printTotalExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmetExpenses = Math.floor(lostFights / 2) * helmetPrice;
    let swordExpenses = Math.floor(lostFights / 3) * swordPrice;
    let shieldExpenses = Math.floor(lostFights / 6) * shieldPrice;
    let armorExpenses = Math.floor(lostFights / 12) * armorPrice;

    let totalExpenses = helmetExpenses + swordExpenses + shieldExpenses + armorExpenses;

    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}