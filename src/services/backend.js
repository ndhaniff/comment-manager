const apiUrl = process.env.REACT_APP_API_URL

const get = async function (url) {
  let res = await fetch(`${apiUrl}/${url}`)
  res = await res.json()
  return res
}

export { get }
