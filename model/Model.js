class Model {
    data = [
      { id: 1, palabra: "perro" },
      { id: 2, palabra: "gato" },
    ];
  
    getFrase = () => {
      return this.data;
    };
    
    create = (palabra) => {
      const id = this.data[this.data.length - 1].id+1
      this.data.push({
        id,
        palabra,
      });
      return "ok";
    };

    getById = (id) => {
      const item = this.data.find((element) => element.id === parseInt(id));
      if (!item) throw new Error(`No se encontró la palabra con id ${id}`);
      return item;
    };
  
    delete = (id) => {
      const index = this.data.findIndex((element) => element.id === parseInt(id));
      if (index === -1) throw new Error(`No se encontró la palabra con id ${id}`);
      this.data.splice(index, 1);
      return `Palabra con id ${id} eliminada correctamente`;
    };
  }
  
  export default Model;
 