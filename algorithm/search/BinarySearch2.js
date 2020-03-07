int BinarySearch(int array[], int n, int value)
{
	int left = 0;
	int right = n - 1;

	while (left <= right)  
	{
		int middle = left + ((right - left) >> 1);
		if (array[middle] >= value)  //因为是找到最小的等值下标，所以等于号放在这里
			right = middle - 1;
		else
			left = middle + 1;
	}
	return array[right + 1] == value ? right + 1 : -1;
}

// 给定一个有序的数组，查找value是否在数组中，不存在返回-1。
function BinarySearch(array, value) {
	let len = array.length,
		left = 0,
		right = len -1
		while(left < right) {
			let middle = left + ((right - left) >> 1) // 防止溢出，移位也更高效
			if(array[middle] > value) {
				right = middle -1
			} else if(array[middle] < value) {
				left = middle + 1
			} else {
				return middle
			}
		}
		return -1
}

// 给定一个有序的数组，查找value第一次出现的下标，不存在返回-1。
function BinarySearch(array, value) {
	let len = array.length,
			left = 0,
			right = len -1
	while (left <= right)  
		{
			let middle = left + ((right - left) >> 1);
			if (array[middle] >= value)  //因为是找到最小的等值下标，所以等于号放在这里
				right = middle - 1;
			else
				left = middle + 1;
		}
		return array[right + 1] == value ? right + 1 : -1;
}

// 给定一个有序的数组，查找最接近value且大于value的数的下标（如果该数存在多个，返回第一个下标），不存在返回-1。

int BinarySearch(int array[], int n, int value)
{
	int left = 0;
	int right = n - 1;

	while (left <= right)  
	{
		int middle = left + ((right - left) >> 1);
		if (array[middle] > value)
			right = middle - 1;
		else
			left = middle + 1;
	}
	return array[right + 1] > value ? right + 1 : -1;
}

// 来源：https://segmentfault.com/a/1190000008699980