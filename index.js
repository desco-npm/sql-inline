const replaceall = require('replaceall')
const getQuotesContent = require('@desco/get-quotes-content')

const sqlInline = sql => {
    let newSql = sql.split(`\n`).join(' ').trim()
    const quoted = getQuotesContent(newSql, true)

    quoted.map(q => {
        newSql = newSql.replace(q, '[ToReplace]')
    })

    while (newSql.indexOf('  ') !== -1) {
        newSql = replaceall('  ', ' ', newSql)
    }

    quoted.map(q => {
        newSql = newSql.replace('[ToReplace]', q)
    })

    return newSql
}

module.exports = sqlInline