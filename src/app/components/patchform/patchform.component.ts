import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-patchform',
  templateUrl: './patchform.component.html',
  styleUrls: ['./patchform.component.scss']
})
export class PatchformComponent implements OnInit {

  homeform!: FormGroup;
  personaId!: string;

  constructor(private route: ActivatedRoute, private fireBase: FirebaseService, private router: Router) { }

  ngOnInit(): void {
    this.personaId = this.route.snapshot.paramMap.get('id')!;
    this.homeform = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      color: new FormControl('', Validators.required),
      intext: new FormControl('', Validators.required)
    });

    this.loadPersona();
  }

  loadPersona(): void {
    this.fireBase.getPersona(this.personaId).subscribe(data => {
      this.homeform.setValue({
        name: data.name,
        email: data.email,
        color: data.color,
        intext: data.intext
      });
    });
  }

  onSubmit(): void {
    this.fireBase.updatePersona(this.personaId, this.homeform.value).subscribe(() => {
      setTimeout(() => {
        this.router.navigate(['/contatti']);
      }, 1000);
    });
  }

}
