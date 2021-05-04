var Usuario = function (name, email, contra) {
    //this.id = 0;
    this.name = name;
    this.email = email;
    this.contra = contra;
  };
  
  Usuario.prototype = {
    setId: function (id) {
      this.id = id;
    },
    isValid: function () {
      if (!this.name || !this.email || !this.contra) return false;
      return true;
    }
  };