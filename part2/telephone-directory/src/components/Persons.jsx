

const Persons = ({persons, searchValue, delName}) => {

    return (
        <>
            <ul>
                {
                    persons
                        .filter((el) => (
                            el.name.toLowerCase().includes(searchValue.toLowerCase())
                        ))
                        .map((person) => (
                            <li key={person.name}>
                                {person.name} {person.number} 
                                <button
                                    onClick={()=>delName(person.id, person.name)}
                                >
                                    delete
                                </button>
                            </li>
                        ))
                }
            </ul>
        </>
    )
}

export { Persons }