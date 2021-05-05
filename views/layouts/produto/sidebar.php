<?php
use yii\helpers\Url;
?>
<div class="col-md-3">

<div class="blog-sidebar">

    <div class="block">

        <h4>Categorias</h4>

        <div class="list-group">

            <a href="index.php?cat=1" class="list-group-item">

                <i class="fa  fa-dot-circle-o"></i>

                Alimentos

            </a>

            <a href="index.php?cat=3" class="list-group-item">

                <i class="fa  fa-dot-circle-o"></i>

                Limpeza

            </a>

            <a href="index.php?cat=4" class="list-group-item">

                <i class="fa  fa-dot-circle-o"></i>

                Higiênie Pessoal

            </a>

            <a href="#" class="list-group-item">

                <i class="fa  fa-dot-circle-o"></i>

                Papelaria

            </a>

            <a href="index.php?cat=2" class="list-group-item">

                <i class="fa  fa-dot-circle-o"></i>

                Bebidas

            </a>

        </div>

    </div>

    <div class="block">

        <img src="<?=Url::base()?>/estilo/img/frutas_p.jpg" alt="">

    </div>

    <div class="block">

        

        <ul class="media-list">

            <li class="media">

                <a class="pull-left" href="#">

                    <img class="media-object" src="<?=Url::base()?>/estilo/img/frete.png" alt="...">

                </a>

                <div class="media-body">

                    <a href="" class="media-heading">Entrega em até 25min após a compra.

                    <p>Entenda o seu frete.</p></a>

                </div>

            </li>

            <li class="media">

                <a class="pull-left" href="#">

                    <img class="media-object" src="<?=Url::base()?>/estilo/img/desconto.png" alt="...">

                </a>

                <div class="media-body">

                    <a href="" class="media-heading">Desconto na primeira compra

                    <p>Para quem mora no bairro da Compensa</p></a>

                </div>

            </li>

            

          </ul>

    </div>



    

</div>  <!-- End of /.col-md-3 -->