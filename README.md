# base-presentation-crud-component
<p> realize there are almost control dashboard always do the same flow at CRUD, this library make CRUD more simple, don't need to repeat through projects <p>

### Usages
 * extends BasePresentationalCRUDComponent<T> 
 ```
 export class BookListAdminComponent extends BasePresentationalCRUDComponent<Book> {
  createEmitter: EventEmitter<Book>;
  updateEmitter: EventEmitter<Book>;
  deleteEmitter: EventEmitter<Book>;
 }
 ```
 
### DELETE 
<p> this is the first simple <p> 
* Customzie the dialog  
```
 protected configDelete() {
    return {
      title: 'XÓA',
      content: 'bạn có chắc muốn xóa ?',
      no_button: 'HỦY',
      yes_button: 'ĐỒNG Ý XÓA'
    }
  };
```

### CREATE 
* customize the dialog 
```
 protected configCreate() {
    return {
      title: 'thêm mới',
      content: 'bạn có muốn lưu?',
      no_button: 'không',
      yes_button: 'lưu',
      form: {
        model: { email: 'email@gmail.com' },
        fields: [{
          key: 'email',
          type: 'input',
          templateOptions: {
            label: 'Email address',
            placeholder: 'Enter email',
            required: true,
          }
        }]
      }
    }
  }; 
```

### UPDATE 
*Customize the dialog 
```
  protected configUpdate(){
    return {
      title: 'SỬA',
      content: 'Bạn có muốn lưu chỉnh sửa?',
      no_button: 'không',
      yes_button: 'có',
      form: {
        model: { email: 'email@gmail.com' },
        fields: [{
          key: 'email',
          type: 'input',
          templateOptions: {
            label: 'Email address',
            placeholder: 'Enter email',
            required: true,
          }
        }]
      }
    }
  };
```
### THIS LIBRARY WILL BE UPDATE MORE

