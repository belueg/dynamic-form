const fs = require('fs-extra')

let fields = {}

const rootFolder = fs.readdirSync('./')
const fieldsJson = rootFolder.filter(file => file.includes('field_') && file)

fieldsJson.map(fieldJson => {
  const fieldName = fieldJson.split('field_')[1].split('.json')[0]

  const fieldContent = fs.readJsonSync(fieldJson)
  fields = { ...fields, [fieldName]: fieldContent }
})

fs.writeFileSync(
  'fields_test.js',
  'export default ' + JSON.stringify(fields, null, 2)
)
