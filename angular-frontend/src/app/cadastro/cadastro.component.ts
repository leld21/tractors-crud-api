import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { CadastroService } from "./services/cadastro.service";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.scss"],
})
export class CadastroComponent implements OnInit {
  tratorCadastro: any;
  base64textString: any = [];
  constructor(
    private cadastroService: CadastroService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit() {
    this.tratorCadastro = this.formBuilder.group({
      name: ["", Validators.required],
      file: [null],
    });
  }

  onSubmit(): void {
    const cadastro = {
      name: this.tratorCadastro.value.name,
      image_base64: this.base64textString[0],
    };

    console.log(this.base64textString[0]);

    this.cadastroService.cadastrar(cadastro).subscribe((res: any) => {
      console.log(res);
    });

    this.base64textString = [];

    this.resetForm();
  }

  onFileSelect(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoaded(e: any) {
    this.base64textString.push(btoa(e.target.result));
  }

  resetForm() {
    this.tratorCadastro.reset();
  }
}
