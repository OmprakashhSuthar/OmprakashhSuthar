$(document).ready(function () {

    // $('.btn').click(function () {
    //     $('p').prepend('<b>Paragraph</b>');
    //     $('ol').append('<li>link</li>')
    // })
    // //Prepend Append After Before
    // $('li').each(function (index, event) {
    //     console.log(index);
    //     console.log(event);
    //     console.log($(this).html().trim())
    //     $(this).after(" AFTER ");
    //     $(this).append(' APPEND');
    //     $(this).prepend('PREPEND ')
    //     $(this).before(' BEFORE ')
    //     // $(this).empty();
    //     // $(this).remove();
    // })
    // $('li:eq(4)').html('number 3')
    // $('ol').on('click', 'li', function (event) {
    //     // event.preventDefault();
    //     // $(this).after('x')
    //     $(this).append('<span class="glyphicon glyphicon-ok"></span>')
    // })
    //Adding list value dynamically using input box 
    // $('button').click(function () {
    //     console.log('clicked')
    //     let a = $('#input').val();
    //     console.log(a)
    //     $('ol').append('<li>' + a + '</li>')
    //     $('#input').val('')

    // })
    // $('ol').on('click','li',function () {
    //     $(this).css('background-color','green')
    // })

    // $('li').on('mouseclick',function(){
    //     // console.log('ompraksh')
    //     $(this).prepend('om')
    // })  
    // $('li').mouseover(function (e) {
    //     $(this).text('mouseover')
    // }).mouseout(function (e) {
    //     console.log('mouseout')
    //     console.log(e)
    //     let value = $('li').text();
    //     $(this).text(value);
    // })
    // $('.p1').mouseover(function(e){
    //     $('.p1').text('mouseover')
    // }).mouseout(function(e){
    //     console.log(e)
    //     let val = $('.p1').text();
    //     console.log(val)
    //     $('.p1').text(val);
    // })

    // $('ol li').click(function(){
    //     $(this).children().css('color','red')
    // });
    // $('ol li').children().last().css('color','')
    // $('.container').children().last().css('color', 'red')


    // $('p').click(function () {
    //     $(this).removeClass('p1');
    // })
    //Adding and removing class in DOM
    // $('p').click(function(){
    //     if($(this).children().hasClass('p1')){
    //         $(this).removeClass('p1')
    //         $(this).hide('p1')
    //         $(this).css('padding','10px')
    //     }else{
    //         $(this).addClass('p');
    //         $(this).css('padding','10px')

    //     }
    // })
    //Hide and show function in jquery
    $('p').click(function () {
        $(this).toggle(2000)
    })
})
    
