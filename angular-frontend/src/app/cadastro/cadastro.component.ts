import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CadastroService } from './services/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  tratorCadastro: any;
  constructor(
    private cadastroService: CadastroService,
    private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.tratorCadastro = this.formBuilder.group({
      name: ['', Validators.required],
      file: [null]
    })
  }

  onSubmit(): void {
    const formData = new FormData();
    formData.append('name', this.tratorCadastro.get('name').value);
    formData.append('file', this.tratorCadastro.get('file').value);

    if (this.tratorCadastro.valid) {
      this.cadastroService.cadastrar(formData).subscribe(
        (res: any) => {
          console.log(res);
          this.resetForm();
        },
        (err: any) => {
          console.log(err);
        }
      )
    } else {
      alert('O campo nome é obrigatório');
    }

    this.resetForm();
  }

  onFileSelect(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.tratorCadastro.get('file').setValue(file);
    }
  }

  resetForm() {
    this.tratorCadastro.reset();
  }
}