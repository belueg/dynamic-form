export default {
  'interested': {
    'title': '¿Cómo te gustaría trabajar?',
    'subtitle': 'Selecciona tu opción favorita',
    'selected': 4,
    'options': [
      {
        'id': 4,
        'radioGroup': 'interested',
        'name': 'Despacho flexible',
        'image':
          'https://simplework.es/wp-content/uploads/2016/12/Despacho-ejecutivo-1-400x284.jpg',
        'description': 'Descripción de despachos flexibles y sus ventajas.',
        'calculationVariables': {
          'basePrice': 5,
          'workerPrice': 1
        },
        'checkboxes': [
          {
            'name': 'option1',
            'checkboxGroup': 'DespachoFlexible',
            'description': 'short description about despacho flexible',
            'checked': true,
            'fixed': true,
            'impactPrice': 2,
            'impactPriceWorker': 1
          },
          {
            'name': 'option2',
            'checkboxGroup': 'DespachoFlexible',
            'description': 'short description about despacho flexible',
            'checked': true,
            'fixed': false,
            'impactPrice': 2,
            'impactPriceWorker': 1
          }
        ]
      },
      {
        'id': 5,
        'radioGroup': 'interested',
        'name': 'Sala de reuniones',
        'image':
          'https://simplework.es/wp-content/uploads/2016/12/Sala-1-1-400x284.png',
        'description': 'Descripción de salas de reuniones y sus ventajas.',
        'calculationVariables': {
          'basePrice': 3,
          'workerPrice': 1
        },
        'checkboxes': [
          {
            'name': 'option1',
            'checkboxGroup': 'SalaReuniones',
            'description': 'short description about sala de reuniones',
            'checked': true,
            'fixed': true,
            'impactPrice': 2,
            'impactPriceWorker': 1
          },
          {
            'name': 'option2',
            'checkboxGroup': 'SalaReuniones',
            'description': 'short description about sala de reuniones',
            'checked': false,
            'fixed': false,
            'impactPrice': 2,
            'impactPriceWorker': 1
          }
        ]
      },
      {
        'id': 6,
        'radioGroup': 'interested',
        'name': 'Coworking',
        'image':
          'https://simplework.es/wp-content/uploads/2019/06/oficinas-en-valencia-400x284.jpg',
        'description': 'Descripción de coworking y sus ventajas.',
        'calculationVariables': {
          'basePrice': 2,
          'workerPrice': 1
        },
        'checkboxes': [
          {
            'name': 'option1',
            'checkboxGroup': 'Coworking',
            'description': 'short description about coworking',
            'checked': false,
            'fixed': false,
            'impactPrice': 2,
            'impactPriceWorker': 1
          },
          {
            'name': 'option2',
            'checkboxGroup': 'Coworking',
            'description': 'short description about  coworking',
            'checked': false,
            'fixed': false,
            'impactPrice': 2,
            'impactPriceWorker': 1
          }
        ]
      }
    ]
  },
  'now': {
    'title': '¿Cómo trabajas en este momento?',
    'subtitle': 'Selecciona cómo trabajas ahora',
    'selected': 1,
    'options': [
      {
        'id': 1,
        'radioGroup': 'now',
        'name': 'Oficina',
        'image': 'https://i.imgur.com/2EEW2rJ.jpeg',
        'calculationVariables': {
          'basePrice': 9,
          'workerPrice': 3
        }
      },
      {
        'id': 2,
        'radioGroup': 'now',
        'name': 'Desde casa',
        'image': 'https://i.imgur.com/A3GZsNx.jpeg',
        'calculationVariables': {
          'basePrice': 0,
          'workerPrice': 0
        }
      },
      {
        'id': 3,
        'radioGroup': 'now',
        'name': 'Coworking',
        'image': 'https://i.imgur.com/RZ8I7qa.jpeg',
        'calculationVariables': {
          'basePrice': 6,
          'workerPrice': 2
        }
      }
    ]
  },
  'required_positions': {
    'title': '¿Cuántos puestos necesitas?',
    'subtitle': 'Puestos:',
    'workers': 1
  },
  'save_money': {
    'title': ' Precio simple desde €',
    'alternativeTitle': 'Ahorra con Simplework €'
  },
  'user_data': {
    'button': 'Ver desglose',
    'sendDataBtn': 'Enviar',
    'title': 'Rellena con tus datos para obtener un presupuesto personalizado',
    'subtitle': 'Añade tus datos',
    'nameLabel': 'Tu nombre',
    'emailLabel': 'Tu email',
    'phoneLabel': 'tu teléfono',
    'commentsLabel': 'Comentarios',
    'commentsPlaceholder': '¿Algo que quieras comentarnos?',
    'userData': {
      'name': '',
      'email': '',
      'phone': '',
      'comments': ''
    }
  }
}
