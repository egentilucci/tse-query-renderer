export default () => {
    const today = new Date()

    let year = '' + today.getFullYear()
    let month = '' + (today.getMonth() + 1)
    let day = '' + today.getDate()

    if (month.length < 2) { month = '0' + month }
    if (day.length < 2) { day = '0' + day }

    const date = year + '-' + month + '-' + day

    let hours = '' + today.getHours()
    let minutes = '' + today.getMinutes()
    let seconds = '' + today.getSeconds()

    if (hours.length < 2) { hours = '0' + hours }
    if (minutes.length < 2) { minutes = '0' + minutes }
    if (seconds.length < 2) { seconds = '0' + seconds }

    const time = hours + ':' + minutes + ':' + seconds

    return date + ' ' + time
}