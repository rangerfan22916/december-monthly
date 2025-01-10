document.getElementById('generateNameBtn').addEventListener('click', () => {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const roadType = document.getElementById('roadType').value.trim();
    const favoriteColor = document.getElementById('favoriteColor').value.trim();
    const favoriteAnimal = document.getElementById('favoriteAnimal').value.trim();

    if (!firstName || !lastName || !roadType || !favoriteColor || !favoriteAnimal) {
        alert('Please fill out all fields!');
        return;
    }

    let prefix = /^[AEIOU]/i.test(firstName) ? "The Great" : "Master";
    let customFirstName = firstName.length > 5 ? firstName.slice(0, 3) : firstName;

    let middleName = {
        Road: `${favoriteColor} Path`,
        Street: `${favoriteColor} Lane`,
        Ave: "Mystic",
        Other: "of the Unknown",
    }[roadType] || "Adventurer";

    let customLastName = lastName.startsWith("M")
        ? "Moonshadow"
        : lastName.length > 5
        ? `${lastName}thorn`
        : lastName.split('').reverse().join('');

    let suffix = favoriteColor.toLowerCase() === "blue"
        ? "of the Endless Sky"
        : favoriteAnimal.toLowerCase() === "cat"
        ? "Whiskers of Destiny"
        : "of the Forgotten Realm";

    const fantasyName = `${prefix} ${customFirstName} ${middleName} ${customLastName} ${suffix}`;
    alert(fantasyName);
});
