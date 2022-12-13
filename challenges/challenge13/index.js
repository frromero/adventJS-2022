//300 puntos
function getFilesToBackup(lastBackup, changes) {
  return [
    ...new Set(changes.filter((c) => c[1] > lastBackup).map((c) => c[0])),
  ].sort((a, b) => a - b);
}
module.exports = getFilesToBackup