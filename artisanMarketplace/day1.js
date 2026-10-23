let artisans = [
    { name: "Emeka the Barber", skill: "Barbing", price: 5000},
    { name: "Aisha Tailor", skill: "Fashiom", price: 8000 },
    { name: "John Plumber", skill: "Plumbing", price: 7000 },
    { name: "Grace Hairdresser", skill: "Hairdresser", price: 6200}

];

function calculateTotal(price) {
    let commission = price * 0.1;
    let transport = 1000;
    return price + commission + transport;
}

console.log("=== AVAILABLE ARTISANS ===");
for (let i = 0; i < artisans.length; i++)
{
    let a = artisans[i];
    console.log(i+1 + ". " + a.name + " - " + a.skill + " - Total: N" + calculateTotal(a.price));


}