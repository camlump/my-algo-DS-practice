// [32, 93, 81, 9, 20, 10, 2]
// [9, 20, 10, 2], [32], [81, 93]
// [9, 20, 10, 2], [32], [81, 93]
// [2, 9, 10], [20], [32], [81], [93]
// [2], [9, 10], [20], [32], [81], [93]
// [2], [9], [10], [20], [32], [81], [93]
// [2], [9, 10], [20], [32], [81], [93]
// [2, 9, 10], [20], [32], [81], [93]
// [2, 9, 10, 20], [32], [81, 93]
// [2, 9, 10, 20, 32, 81, 93]
// This is actually O(n * k)


function bucketSort(items) {
  // Recursive base case.
  if (items.length <= 1) {
    return items;
  }

  // Determine number of buckets, and create empty buckets.
  let numBuckets = Math.ceil(Math.sqrt(items.length));
  let buckets = [];
  for (let i = 0; i < numBuckets; i++) {
    buckets.push([]);
  }

  // Calculate the range of item values.
  let min = items[0];
  let max = items[0];
  for (let i = 1; i < items.length; i++) {
    min = Math.min(min, items[i]);
    max = Math.max(max, items[i]);
  }

  // Calculate the range of values for a single bucket.
  let range = max - min;
  let bucketSize = Math.ceil(range / numBuckets);

  // Put the items into buckets.
  for (let i = 0; i < items.length; i++) {
    let value = items[i];
    let bucketIdx = Math.floor((value - min) / bucketSize);
    if (bucketIdx < 0 || bucketIdx >= buckets.length) {
      console.log('!!', bucketIdx, value, min, max, range, numBuckets, bucketSize, items);
    }
    buckets[bucketIdx].push(value);
  }

  // Sort the buckets.
  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = bucketSort(buckets[i]);
  }

  // Concatenate the buckets.
  let result = [];
  for (let i = 0; i < buckets.length; i++) {
    let bucket = buckets[i];
    for (let j = 0; j < bucket.length; j++) {
      result.push(bucket[j]);
    }
  }

  // Return the concatenated buckets.
  return result;
}

module.exports = bucketSort;
