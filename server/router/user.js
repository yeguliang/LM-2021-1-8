const db = require('./db')
let show = data => {
  return new Promise((resolve, reject) => {
    db.query(
      `SELECT model.*,series.name AS seriesName FROM model inner join series on model.seriesid=series.id  where MATCH(model.name, typeName) AGAINST ('${data}') or series.name LIKE '%${data}%'`,
      (err, rows) => {
        if (err) {
          reject(err)
        }
        resolve(rows)
      }
    )
  })
} //显示全部 （select*）

exports.show = show
