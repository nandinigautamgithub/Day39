function printRepeating(arr,size)
    {   
        var i, j;
        console.log("Repeated Elements are :");
        for (i = 0; i < size-1; i++)
        {
            for (j = i + 1; j < size; j++)
            {
                if (arr[i] == arr[j])
                    console.log(arr[i] + " ");
            }
        }
    }
    var arr = [25,23,46,77,99,77,43,46,43,99,83,78,83,38,78,38,89,23,45,67,12,90,45,27];
    var arr_size = arr.length;
    
printRepeating(arr, arr_size);