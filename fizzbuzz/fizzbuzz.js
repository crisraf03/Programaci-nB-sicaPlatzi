var numeros = 100;

fizzBuzz(100,20)
fizzBuzz(50,5)

function fizzBuzz(lim, paso)
{
  document.write(`Limite: ${lim} , paso: ${paso} <br />`);

  for (var i = 1 ; i <= lim ; i+= paso)
    {
      divisible = false;

      if (esDivisible(i,3))
      {
        document.write("Fizz");
      }

      if (esDivisible(i,5))
      {
        document.write("Buzz");
      }

      if(!esDivisible(i,3) && !esDivisible(i,5)) // i % 3 != 0 && i % 5 != 0
      {
        document.write(i);
      }
    document.write("<br />");
    }
  }




function esDivisible(num, den)
  {
    if (num % den == 0 )
      {
        return true;
      }

    else
      {return false;}
  }
