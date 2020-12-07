

export const fetchSearch = (searchString) => {
  return $.ajax({url: `/api/search/?q=${searchString}`, method: "GET"})
}