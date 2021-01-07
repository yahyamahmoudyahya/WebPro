<!DOCTYPE html>
<html>
<head>
    <title>Beauty Tools</title>
    <meta charset="utf-8"/>
    <meta name="description" content="name shope"/>
    <meta name="keywords" content="keyone,keytwo,..."/>
    <meta name="author" content="yhya qosa"/>
    <meta name="viewport" content="width= derice-width,initial-scale = 1.0"/>
    <link href="{{URL::asset('style.css')}}" rel="stylesheet">
</head>
<body>

<i class="fab fa-xbox" id="hedin0"></i>
<table class="table" id="ff">
    @if(session()->has('cart'))
        <tbody id="bodyTable">
        <tr>
            <th class="td"> Name</th>
            <th class="td">Prise</th>
            <th class="td">Count</th>
        </tr>
        @foreach(session()->get('cart')->products as $cartProduct)
            <form action="{{ route('delete.cart') }}" method="POST">
                @csrf
                <tr>
                    <th class="td">{{$cartProduct['product']->name}}</th>
                    <th class="td">{{$cartProduct['price']}}</th>
                    <th class="td">{{$cartProduct['qty']}}</th>
{{--                    <th class="td">--}}
{{--                        <button name="id" type="submit" value="{{$cartProduct['product']->id}}">delete</button>--}}
{{--                    </th>--}}

                </tr>
            </form>
        @endforeach
        <tr>
            <th class="td"> total price</th>
            <th class="td" colspan="2">{{session()->get('cart')->grandTotal}}</th>

        </tr>

        <tr>
            <th class="td"> total item</th>
            <th class="td" colspan="2">{{session()->get('cart')->qty}}</th>
        </tr>

        <tr>
            <th class="td" colspan="3">
                <a onclick="window.location='{{ url("/deleteSession") }}'" > delete all </a>
            </th>

        </tr>

        </tbody>

        <tfoot>

        </tfoot>
    @else
        <th class="td"> No items yet!</th>
    @endif

</table>

{{--cart test--}}


</body>
</html>

