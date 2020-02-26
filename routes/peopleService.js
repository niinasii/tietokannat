var people = [{ id: 1, name: 'Anna', email: 'anna@malli.fi' }, { id: 2, name: 'Mikko', email: 'mikko@mallikas.fi' }, { id: 3, name: 'Taina', email: 'taina@mallinen.fi' }]

const getPeople = () => {
    return people;
}

const getPerson = (id) => {
    let p = people.find(p => p.id == id);
    console.dir(p);
    return p;
}
//const getPerson=(id)=>people.find(p=>p.id==id); sama funktio lyhyemmällä syntaksilla kuin ylempi

const deletePerson = (id) => {
    people = people.filter(p => p.id != id);
    return { message: 'Deleted' };
}

const addPerson = (p) => {
    people.push(p)
    return { message: 'Added' };
}

const updatePerson = (updatedPerson, id) => {
    let ind = people.findIndex(p => p.id == id);
    people[ind] = updatePerson;
    return { message: 'Updated' };
}

module.exports = { getPeople, getPerson, addPerson, deletePerson, updatePerson }