document.getElementById('manipulateButton').addEventListener('click', function() {
    const person = { name: "Meder", age: 18 };
    document.getElementById('initialObject').textContent = JSON.stringify(person);

    person.location = "Naryn";
    document.getElementById('addedProperty').textContent = JSON.stringify(person);

    person.age = 30;
    document.getElementById('modifiedProperty').textContent = JSON.stringify(person);

    delete person.location;
    document.getElementById('deletedProperty').textContent = JSON.stringify(person);
});

