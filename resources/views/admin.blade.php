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

<!--one-->
<nav class="navigation" id="nav">
    <p class="text">Beauty Tools</p>
    <ul class="list">
        <li class="ul-li"><a href="#makeup">Makeup</a></li>
        <li class="ul-li"><a href="#shawls"> Shawls</a></li>
        <li class="ul-li"><a href="#bags">Bags</a></li>
        <li class="ul-li"><a href="#perfumes">Perfumes</a></li>
        <li class="ul-li"><a href="#add">add</a></li>
        <li class="ul-li"><a href="#ord">orders</a></li>
    </ul>
</nav>
<header class="header header2">
    <button type="button" onclick="window.location='{{ url("/") }}'" id="botonn" class="botonn">shope</button>
    <div class="dvh">
        <form id="form" class="form">
            <input list="item" class="sersh" placeholder="sersh on the item" id="lestt">
            <datalist id="item">

            </datalist>
        </form>
        <div class="fi" id="fi">
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
            <p class="p2">Eng : Yahya M. Qosa</p>
        </div>
    </div>
    <div class="person">
        <div class="imge"><img src="img/m9.jpg" class="img"></div>
        <div class="wordPerson">
            <p>Our priority is your satisfaction. Visit us, you will find what pleases you</p>
            <p class="p2">Eng : Mohammed El-Shorafa</p>
        </div>
    </div>
</section>
<!--three-->
<!--makeup-->
<article class="art">
    <p class="nameart"> Makeup</p>
    <div class="itemsartone" id="makeup">
        @foreach($makeup as $item)
            <form action="{{ route('remove.item')}}" method="post">
                @csrf
                <article class="item" id="element 10">
                    <!--front-->
                    <div class="front">
                        <div class="divimgitem"><img src="{{$item->image}}" class="imgitem"></div>
                        <div class="divtextitem"><p class="titl" id="thi0">name : </p>
                            <p class="textitem">{{$item->name}}</p></div>
                        <div class="divtextitem"><p class="titl">prise : </p>
                            <p class="textitem">{{$item->price}}</p></div>
                    </div>
                    <!--back-->
                    <div class="back">
                        <p class="divtextitemback">remove</p>
                        <input type="submit" value="remove" class="submit adding">
                        <input type="hidden" name="id" value="{{$item->id}}">
                    </div>
                </article>
            </form>
        @endforeach
    </div>
</article>
<!--shawls-->
<article class="art">
    <p class="nameart"> Shawls</p>
    <div class="itemsartone" id="shawls">
        @foreach($shawle as $item)
            <form action="{{ route('remove.item') }}" method="post">
                @csrf
                <article class="item" id="element 10">
                    <!--front-->
                    <div class="front">
                        <div class="divimgitem"><img src="{{$item->image}}" class="imgitem"></div>
                        <div class="divtextitem"><p class="titl" id="thi0">name : </p>
                            <p class="textitem">{{$item->name}}</p></div>
                        <div class="divtextitem"><p class="titl">prise : </p>
                            <p class="textitem">{{$item->price}}</p></div>
                    </div>
                    <!--back-->
                    <div class="back">
                        <p class="divtextitemback">remove</p>
                        <input type="submit" value="remove" class="submit adding">
                        <input type="hidden" name="id" value="{{$item->id}}">
                    </div>
                </article>
            </form>
        @endforeach
    </div>
</article>
<!--bags-->
<article class="art">
    <p class="nameart"> Bags</p>
    <div class="itemsartone" id="bags">
        @foreach($bage as $item)
            <form action="{{ route('remove.item') }}" method="post">
                @csrf
                <article class="item" id="element 10">
                    <!--front-->
                    <div class="front">
                        <div class="divimgitem"><img src="{{$item->image}}" class="imgitem"></div>
                        <div class="divtextitem"><p class="titl" id="thi0">name : </p>
                            <p class="textitem">{{$item->name}}</p></div>
                        <div class="divtextitem"><p class="titl">prise : </p>
                            <p class="textitem">{{$item->price}}</p></div>
                    </div>
                    <!--back-->
                    <div class="back">
                        <p class="divtextitemback">remove</p>
                        <input type="submit" value="remove" class="submit adding">
                        <input type="hidden" name="id" value="{{$item->id}}">
                    </div>
                </article>
            </form>
        @endforeach
    </div>
</article>
<!--perfumes-->
<article class="art">
    <p class="nameart"> Perfumes</p>
    <div class="itemsartone" id="perfumes">
        @foreach($perfume as $item)
            <form action="{{ route('remove.item') }}" method="post">
                @csrf
                <article class="item" id="element 10">
                    <!--front-->
                    <div class="front">
                        <div class="divimgitem"><img src="{{$item->image}}" class="imgitem"></div>
                        <div class="divtextitem"><p class="titl" id="thi0">name : </p>
                            <p class="textitem">{{$item->name}}</p></div>
                        <div class="divtextitem"><p class="titl">prise : </p>
                            <p class="textitem">{{$item->price}}</p></div>
                    </div>
                    <!--back-->
                    <div class="back">
                        <p class="divtextitemback">remove</p>
                        <input type="submit" value="remove" class="submit adding">
                        <input type="hidden" name="id" value="{{$item->id}}">
                    </div>
                </article>
            </form>
        @endforeach
    </div>
</article>


<!--foure-->
<section class="formation" id="add">
    <p class="titleinf">Add Producte</p>

    <form id="newItemForm">
        <input id="nameItem" type="text" name="nameItem" placeholder="Enter the product name" class="inputform"
               required maxlength="40">
        <input id="priceItem" type="number" name="priceItem" placeholder="Enter the product price" class="inputform"
               required min="0">
        <input id="imge" type="url" name="imge" placeholder="Enter the product image" class="inputform" required>
        <select class="inputform buton" name="selected" style="margin:auto; display:block; width: 50%" required
                id="addType">
            <option value='makeup'> Makeup</option>
            <option value="shawls">Shawls</option>
            <option value='bags'>Bags</option>
            <option value="perfumes">Perfumes</option>
        </select>
        <input type="submit" class="inputform buton addNewItem" value="add for page" required id="submit">
    </form>
</section>
<!--Orders-->
<article class="art" id="ord">
    <p class="nameart"> orders:</p>
    <div class="itemsartone" id="myOrders">
        @foreach($order as $item)
            <article class="item ord">
                <!--add the formate for order-->
                <div class="front">
                    <p class="titl titl2">order</p>
                    <div class="divtextitem"><p class="titl titl3">name : </p>
                        <p class="textitem">{{$item->name}}</p></div>
                    <div class="divtextitem"><p class="titl titl3">address : </p>
                        <p class="textitem">{{$item->address}}</p></div>
                    <div class="divtextitem"><p class="titl titl3">tel : </p>
                        <p class="textitem">{{$item->phone}}</p></div>
                    <div class="divtextitem"><p class="titl titl3">notes : </p>
                        <p class="textitem">{{$item->note}}</p></div>
                </div>
                <!--back-->
                <div class="back">
                    <table class="table">
                        <tbody id="bodyTable">
                        <tr>
                            <th class="td">Name</th>
                            <th class="td">Prise</th>
                            <th class="td">quantity</th>
                        </tr>

                        @foreach($item->orders_products as $item_shopping)
                            <tr>
                                <th class="td">{{$item_shopping->product_name}}</th>
                                <th class="td">{{$item_shopping->price}}</th>
                                <th class="td">{{$item_shopping->quantity}}</th>
                            </tr>
                        @endforeach
                        </tbody>
                        <tfoot>
                        <td class="td">grand total</td>
                        <td class="td" colspan="2" id="ad">{{$item->grand_total}}</td>
                        </tfoot>
                    </table>
                </div>
            </article>
        @endforeach
    </div>
</article>
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
<div class=" diviconn" id="iconnav"><i class="fas fa-ellipsis-h"></i></div>
<script src="{{URL::asset('ajax/jquery-3.5.1.min.js')}}"></script>
<script
    src="https://kit.fontawesome.com/289b476fa4.js"
    crossorigin="anonymous"></script>
<script src="{{URL::asset('script1.js')}}"></script>
<script>
    $(document).on('click', '.addNewItem', function (e) {
        e.preventDefault();
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        })

        let nameItem = $('#nameItem').val();
        let priceItem = $('#priceItem').val();
        let imge = $('#imge').val();
        let selected = $('#addType').val();


        //alert(product_id);
        $.ajax({
            url: 'addNewItem',
            type: 'POST',
            data: {nameItem: nameItem, priceItem: priceItem, imge: imge, selected: selected},
            success: function (data) {
                alert('success');
            },
            error: function (data) {
                alert('error');
            }
        });
    });
</script>

</body>
</html>
