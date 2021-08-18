export class NotificationsFakeData {
  public static data = {
    messages: [
      {
        image: 'assets/images/portrait/small/avatar-s-15.jpg',
        heading: '<span class="font-weight-bolder">Bienvenid@ 🎉</span>!',
        text: 'Estamos comprometidos a brindarte el mejor servicio.'
      }
    ],
    systemMessages: [
      {
        icon: 'x',
        heading: '<span class="font-weight-bolder">Pago no aprobado</span> Verifícalo',
        text: 'Verifica tu comprobante de pago. . .'
      },
      {
        icon: 'check',
        heading: '<span class="font-weight-bolder">Cuenta verificada</span>',
        text: 'Ahora puedes acceder a todos los beneficios.'
      },
      {
        icon: 'alert-triangle',
        heading: '<span class="font-weight-bolder">Renueva tu contrato</span> Ahora',
        text: 'No dejes de ganar pasivos, renueva tu contrato. . .'
      }
    ],
    system: true
  };
}
