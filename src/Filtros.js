export default{
    methods : {
        formatearFecha : function(fyh) {
          return new Date(fyh).toLocaleString()
        },
        formatearDinero: function(dinero){
            return  "$ " + dinero
        }
      }
    }
