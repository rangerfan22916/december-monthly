// Simple Fantasy Name Generator
function generateFantasyName() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const roadType = document.getElementById('roadType').value;
    const favoriteColor = document.getElementById('favoriteColor').value;
    const favoriteAnimal = document.getElementById('favoriteAnimal').value;

    // Prefix Logic
    let prefix = /^[AEIOU]/i.test(firstName) ? "The Great" : "Master";

    // First Name Logic
    let customFirstName = firstName.length > 5 ? firstName.slice(0, 3) : firstName;

    // Middle Name Logic
    let middleName = {
        Road: `${favoriteColor} Path`,
        Street: `${favoriteColor} Lane`,
        Ave: "Mystic",
        Other: "of the Unknown",
    }[roadType] || "Adventurer";

    // Last Name Logic
    let customLastName = lastName.startsWith("M")
        ? "Moonshadow"
        : lastName.length > 5
        ? `${lastName}thorn`
        : lastName.split('').reverse().join('');

    // Suffix Logic
    let suffix = favoriteColor.toLowerCase() === "blue"
        ? "of the Endless Sky"
        : favoriteAnimal.toLowerCase() === "cat"
        ? "Whiskers of Destiny"
        : "of the Forgotten Realm";

    // Display Fantasy Name
    const fantasyName = `${prefix} ${customFirstName} ${middleName} ${customLastName} ${suffix}`;
    alert(fantasyName);
}

// Attach event listener
document.getElementById('generateNameBtn').addEventListener('click', generateFantasyName);
