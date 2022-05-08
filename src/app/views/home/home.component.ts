import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.renderizar();
  }

  renderizar() {
    let listaNovidades = [
      {
          nome: "ASSASSIN’S CREED VALHALLA",
          preco: "R$ 999,99",
          urlImagem: "./assets/img/produtos/assassins_creed.png",
          urlLink: `_ngcontent-lps-c16="" ng-reflect-router-link="compraitem/" ng-reflect-query-params="[object Object]" href="/compraitem?idProduto=1"`
      },
      {
          nome: "CONSOLE PLAYSTATION 5",
          preco: "R$ 999,99",
          urlImagem: "./assets/img/produtos/playstation_5.png",
          urlLink: `_ngcontent-lps-c16="" ng-reflect-router-link="compraitem/" ng-reflect-query-params="[object Object]" href="/compraitem?idProduto=2`
      },
      {
          nome: "NBA 2k21",
          preco: "R$ 999,99",
          urlImagem: "./assets/img/produtos/nba2K2.png",
          urlLink: `_ngcontent-lps-c16="" ng-reflect-router-link="compraitem/" ng-reflect-query-params="[object Object]" href="/compraitem?idProduto=3`
      },
      {
          nome: "FIFA 22",
          preco: "R$ 999,99",
          urlImagem: "./assets/img/produtos/fifa_22.png",
          urlLink: `_ngcontent-lps-c16="" ng-reflect-router-link="compraitem/" ng-reflect-query-params="[object Object]" href="/compraitem?idProduto=4`
      }
  ]

  let listaPromocoes1 = [
      {
          nome: "FORZA HORIZON 5",
          preco: "R$ 999,99",
          urlImagem: "./assets/img/produtos/forza_horizon.png",
          urlLink: `_ngcontent-lps-c16="" ng-reflect-router-link="compraitem/" ng-reflect-query-params="[object Object]" href="/compraitem?idProduto=5`
      },
      {
          nome: "HOT WHEELS UNLEASHED",
          preco: "R$ 999,99",
          urlImagem: "./assets/img/produtos/hot_wheels.png",
          urlLink: `_ngcontent-lps-c16="" ng-reflect-router-link="compraitem/" ng-reflect-query-params="[object Object]" href="/compraitem?idProduto=6`
      },
      {
          nome: "JOYSTICK XBOX ONE",
          preco: "R$ 999,99",
          urlImagem: "./assets/img/produtos/joystick_xbox_one.png",
          urlLink: `_ngcontent-lps-c16="" ng-reflect-router-link="compraitem/" ng-reflect-query-params="[object Object]" href="/compraitem?idProduto=7`
      },
      {
          nome: "MOUSE GAMER CORSAIR",
          preco: "R$ 999,99",
          urlImagem: "./assets/img/produtos/mouse_gamer_corsair.png",
          urlLink: `_ngcontent-lps-c16="" ng-reflect-router-link="compraitem/" ng-reflect-query-params="[object Object]" href="/compraitem?idProduto=8`
      }
  ]
  
  let listaPromocoes2 = [
      {
          nome: "NOTEBOOK ALIENWARE",
          preco: "R$ 999,99",
          urlImagem: "./assets/img/produtos/notebook_alienware.png",
          urlLink: `_ngcontent-lps-c16="" ng-reflect-router-link="compraitem/" ng-reflect-query-params="[object Object]" href="/compraitem?idProduto=9`
      },
      {
          nome: "RESIDENT EVIL 6",
          preco: "R$ 999,99",
          urlImagem: "./assets/img/produtos/resident_evil_6.png",
          urlLink: `_ngcontent-lps-c16="" ng-reflect-router-link="compraitem/" ng-reflect-query-params="[object Object]" href="/compraitem?idProduto=10`
      },
      {
          nome: "GOD OF WAR",
          preco: "R$ 999,99",
          urlImagem: "./assets/img/produtos/god_of_war.png",
          urlLink: `_ngcontent-lps-c16="" ng-reflect-router-link="compraitem/" ng-reflect-query-params="[object Object]" href="/compraitem?idProduto=11`
      },
      {
          nome: "THE DIVISION 2",
          preco: "R$ 999,99",
          urlImagem: "./assets/img/produtos/the_division_2.png",
          urlLink: `_ngcontent-lps-c16="" ng-reflect-router-link="compraitem/" ng-reflect-query-params="[object Object]" href="/compraitem?idProduto=12`
      },
  ]

      let modeloNovidades = "";

      let quadroNovidades = window.document.getElementById("quadroNovidades")!

      for (let index = 0; index < listaNovidades.length; index++) {
          const novidades = listaNovidades[index];
          console.log(novidades)

          modeloNovidades += `<div class="col-lg-3 quadroItem">
                                  <div class="quadroItemDentro">
                                      <a "${novidades.urlLink}"><img class="imagemProduto img-fluid rounded mx-auto d-block"
                                              src="${novidades.urlImagem}"></a>
                                      <p class="text-center">${novidades.nome}</p>
                                      <p class="text-center preco">${novidades.preco}</p>
                                  </div>
                              </div>`
                              
      }
      quadroNovidades.innerHTML = modeloNovidades;

      let quadroPromocoes1 = document.getElementById("quadroPromocoes1")!

      let modeloPromocoes1 = "";

      for (let index = 0; index < listaPromocoes1.length; index++) {
          const promocoes1 = listaPromocoes1[index];

          modeloPromocoes1 += `<div class="col-lg-3 quadroItem">
                                  <div class="quadroItemDentro">
                                      <a "${promocoes1.urlLink}"><img class="imagemProduto img-fluid rounded mx-auto d-block"
                                              src="${promocoes1.urlImagem}"></a>
                                      <p class="text-center">${promocoes1.nome}</p>
                                      <p class="text-center preco">${promocoes1.preco}</p>
                                  </div>
                              </div>`
      }
      quadroPromocoes1.innerHTML = modeloPromocoes1;

      let quadroPromocoes2 = document.getElementById("quadroPromocoes2")!

      let modeloPromocoes2 = "";

      for (let index = 0; index < listaPromocoes2.length; index++) {
          const promocoes2 = listaPromocoes2[index];

          modeloPromocoes2 += `<div class="col-lg-3 quadroItem">
                                  <div class="quadroItemDentro">
                                      <a "${promocoes2.urlLink}"><img class="imagemProduto img-fluid rounded mx-auto d-block"
                                              src="${promocoes2.urlImagem}"></a>
                                      <p class="text-center">${promocoes2.nome}</p>
                                      <p class="text-center preco">${promocoes2.preco}</p>
                                  </div>
                              </div>`
      }
      quadroPromocoes2.innerHTML = modeloPromocoes2;

  }

}
