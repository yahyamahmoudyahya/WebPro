<!DOCTYPE html>
<html>
<head>
    <title>Beauty Tools</title>
    <meta charset="utf-8"/>
    <meta name="description" content="name shope"/>
    <meta name="keywords" content="keyone,keytwo,..."/>
    <meta name="csrf-token" content="{{csrf_token()}}">
    <meta name="author" content="yhya qosa"/>
    <meta name="viewport" content="width= derice-width,initial-scale = 1.0"/>
    <link href="{{URL::asset('style.css')}}" rel="stylesheet">
</head>
<body>
<!--page1------------------------------------------------------------------------------------->
<section class="pageshop" id="pageshop0">
    <nav class="navigation" id="nav0">
        <p class="text">Beauty Tools </p>
        <ul class="list">
            <li class="ul-li"><a href="#makeup10">Makeup</a></li>
            <li class="ul-li"><a href="#shawls20"> Shawls</a></li>
            <li class="ul-li"><a href="#bags30">Bags</a></li>
            <li class="ul-li"><a href="#perfumes40">Perfumes</a></li>
            <li class="ul-li"><a href="#format0">form</a></li>
        </ul>
    </nav>
    <!--one-->
    <header class="header">


        <button type="button" onclick="window.location='{{ url("/auth") }}'" id="botonn" class="botonn">logen</button>

        <div class="dvh">
            <form id="form0" class="form">
                <input list="item" class="sersh" placeholder="sersh on the item" id="lestt0">
                <datalist id="item0">
                    <option value="feras"></option>
                </datalist>
            </form>
            <div class="fi" id="fi0">
                <i class="fas fa-search" style="font-size: 2.5vw"></i>
            </div>
        </div>

    </header>
    <!--two-->
    <section class="persons">

        <div class="person">
            <div class="imge"><img src="img/m3.jpg" class="img"></div>
            <div class="wordPerson">
                <p>Welcome, our dear customers, you will find all your accessories in one place</p>
                <p class="p2">Eng : yahya Qosa</p>
            </div>
        </div>
        <div class="person">
            <div class="imge"><img src="img/m9.jpg" class="img"></div>
            <div class="wordPerson">
                <p>Our priority is your satisfaction. Visit us, you will find what pleases you</p>
                <p class="p2">Eng : mohammed El Shorafa</p>
            </div>
        </div>
    </section>
    <!--three-->
    <!--makeup-->
    <article class="art">
        <p class="nameart" id="makeup10"> Makeup</p>
        <div class="itemsartone" id="makeup0">
            @foreach($makeup as $item)
                <article class="item" id="{{$item->id}}">
                    <!--front-->
                    <div class="front">
                        <div class="divimgitem"><img src="{{$item->image}}" class="imgitem"></div>
                        <div class="divtextitem"><p class="titl" id="thi0">name : </p>
                            <p class="textitem">{{$item->name}}</p>
                            <input name="nameItem" type="hidden" value="{{$item->name}}">
                        </div>
                        <div class="divtextitem"><p class="titl">prise : </p>
                            <p class="textitem">{{$item->price}}</p>
                            <input name="priceItem" type="hidden" value="{{$item->price}}">
                        </div>
                    </div>
                    <!--back-->
                    <div class="back"><p class="divtextitemback">add to card</p>
                        <input data-id="{{$item->id}}" type="submit" value="add" class="submit adding addToCart">
                    </div>
                </article>
            @endforeach
        </div>
    </article>
    <!--shawls-->
    <article class="art">
        <p class="nameart" id="shawls20"> Shawls</p>
        <div class="itemsartone" id="shawls0">
            @foreach($shawle as $item)

                <article class="item" id="{{$item->id}}">
                    <!--front-->
                    <div class="front">
                        <div class="divimgitem"><img src="{{$item->image}}" class="imgitem"></div>
                        <div class="divtextitem"><p class="titl" id="thi0">name : </p>
                            <p class="textitem">{{$item->name}}</p>
                        </div>
                        <div class="divtextitem"><p class="titl">prise : </p>
                            <p class="textitem">{{$item->price}}</p>
                        </div>
                    </div>
                    <!--back-->
                    <div class="back"><p class="divtextitemback">add to card</p>
                        <input data-id="{{$item->id}}" type="submit" value="add" class="submit adding addToCart">
                    </div>
                </article>

            @endforeach
        </div>
    </article>
    <!--bags-->
    <article class="art">
        <p class="nameart" id="bags30"> Bags</p>
        <div class="itemsartone" id="bags0">
            @foreach($bage as $item)

                <article class="item" id="{{$item->id}}">
                    <!--front-->
                    <div class="front">
                        <div class="divimgitem"><img src="{{$item->image}}" class="imgitem"></div>
                        <div class="divtextitem"><p class="titl" id="thi0">name : </p>
                            <p class="textitem">{{$item->name}}</p>
                        </div>
                        <div class="divtextitem"><p class="titl">prise : </p>
                            <p class="textitem">{{$item->price}}</p>
                        </div>
                    </div>
                    <!--back-->
                    <div class="back"><p class="divtextitemback">add to card</p>
                        <input data-id="{{$item->id}}" type="submit" value="add" class="submit adding addToCart">
                    </div>
                </article>
            @endforeach
        </div>
    </article>
    <!--perfumes-->
    <article class="art">
        <p class="nameart" id="perfumes40"> Perfumes</p>
        <div class="itemsartone" id="perfumes0">
            @foreach($perfume as $item)
                <article class="item">
                    <!--front-->
                    <div class="front">
                        <div class="divimgitem"><img src="{{$item->image}}" class="imgitem"></div>
                        <div class="divtextitem"><p class="titl" id="thi0">name : </p>
                            <p class="textitem">{{$item->name}}</p>
                        </div>
                        <div class="divtextitem"><p class="titl">prise : </p>
                            <p class="textitem">{{$item->price}}</p>
                        </div>
                    </div>
                    <!--back-->
                    <div class="back"><p class="divtextitemback">add to card</p>
                        <input data-id="{{$item->id}}" type="submit" value="add" class="submit adding addToCart">
                    </div>
                </article>
            @endforeach
        </div>
    </article>
    <!--foure-->
    <section class="formation" id="format0">
        <form action="{{route('order.store')}}" method="post">
            @csrf
            <p class="titleinf">Customer Information</p>
            <input type="text" name="name" placeholder="Enter your name" class="inputform"
                   required id="personName"/>
            <input type="tel" name="phone" placeholder="Enter your tel" class="inputform"
                   required id="personTelephon"/>
            <input type="text" name="address" placeholder="Enter your address" class="inputform"
                   required id="personTitle"/>
            <textarea name="note" class="notes inputform" placeholder="Notes" id="notes" required></textarea>

            <input type="submit" class="inputform buton" value="Send the order" id="setForm">
        </form>
    </section>
    <!--five-->
    <div class="this">
        <div class="eennd">
            <i class="fas fa-phone"></i>
            <div class="pennd">
                <p class="pennd1">give us a call:</p>
                <p class="pennd2">+00 (123) 456 7890</p>
            </div>
        </div>
        <div class="eennd">
            <i class="fas fa-envelope"></i>
            <div class="pennd">
                <p class="pennd1">Send Us A Mail:</p>
                <p class="pennd2">support@domain.com</p>
            </div>
        </div>
        <div class="eennd">
            <i class="fas fa-clock"></i>
            <div class="pennd">
                <p class="pennd1">Saturday - Thursday:</p>
                <p class="pennd2">08.00am - 18.00pm</p>
            </div>
        </div>
        <div class="eennd">
            <i class="fas fa-map-marker-alt"></i>
            <div class="pennd">
                <p class="pennd1">Come Visit Us:</p>
                <p class="pennd2">Directions to<a href="" class="a1a1"> our location</a></p>
            </div>
        </div>
    </div>
    </main>
    <div class=" diviconn" id="iconnav0"><i class="fas fa-ellipsis-h"></i></div>
    <div class=" divicon">
        <i class="fas fa-shopping-cart" onclick="window.location='{{ url("/cart") }}'"></i>
    </div>

    <div class="t" id="t0"></div>
</section>

<script src="{{\URL::asset('ajax/jquery-3.5.1.min.js')}}"></script>
<script
    src="https://kit.fontawesome.com/289b476fa4.js"
    crossorigin="anonymous"></script>
<script
    src="{{URL::asset('script1.js')}}" type="text/javascript">

</script>

{{--add to cart script--}}
<script>
    $(document).on('click', '.addToCart', function (e) {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        })

        e.preventDefault();

        let product_id = $(this).data('id');

        //alert(product_id);
        $.ajax({
            url: 'add',
            type: 'POST',
            data: {'id': product_id},
            success: function (data) {
                alert('success');
            },
            error: function (data) {
                alert('error');
            },
            complete: function (data) {
                //alert('complete');
            }
        });
    });
</script>

</body>
</html>
