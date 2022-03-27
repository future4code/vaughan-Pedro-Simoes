const firstNum = Number(process.argv[3])
const secondNum = Number(process.argv[4])







let result = "resultado "





switch(operacao){
	case "soma":
        result += firstNum + secondNum

		break;

	case "sub":
        result += firstNum - secondNum

	    break;

    case "mult":
        result += firstNum * secondNum

            break;

     case "div":
        result += firstNum / secondNum
        
           break;
    }
