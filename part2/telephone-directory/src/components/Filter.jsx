const Filter = ({handleSearchValue}) => {
    return (
        <>
            <div>
                filter show with <input onChange={handleSearchValue} />
            </div>
        </>
    )
}

export { Filter }