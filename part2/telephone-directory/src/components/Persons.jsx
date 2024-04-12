const Persons = ({persons, searchValue}) => {

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
                                {person.name} {person.number} <button>delete</button></li>
                        ))
                }
            </ul>
        </>
    )
}

export { Persons }