const inGroupsOf = <T>(array: T[], size: number): T[][] => (
  array.reduce((list, current, index) => {
    if(index % size === 0) {
      list.push([])
    }

    list[list.length - 1].push(current)

    return list
  }, [] as T[][])
)

export default inGroupsOf
