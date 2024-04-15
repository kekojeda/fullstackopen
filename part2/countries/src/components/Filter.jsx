const Filter = ({handleSearchValue}) => {
    return (
        <>
        <div>
            find country <input type="text" onChange={handleSearchValue} />
        </div>
        </>
    )
}

export { Filter }