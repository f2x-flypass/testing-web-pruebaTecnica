Feature: Registro de usuarios en Flypass

  Scenario: Registro exitoso de usuario con JSON
    Given que estoy en la página de registro de Flypass
    When lleno el formulario de registro con los datos del archivo JSON
    Then debería ver un mensaje de confirmación de registro exitoso

  Scenario: Registro exitoso de usuario con CSV
    Given que estoy en la página de registro de Flypass
    When lleno el formulario de registro con los datos del archivo CSV
    Then debería ver un mensaje de confirmación de registro exitoso
