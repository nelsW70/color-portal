// fake local data implementation of predictive results for customer search
// documentation for semantic ui is here
// https://semantic-ui.com/modules/search.html#/definition
var content = [
  { title: 'Isuzu' },
  { title: 'Jiangnan Mosu' },
  { title: 'Jiulong Jiansu' },
  { title: 'Mitsubishi' },
  { title: 'Ron Swanson' },
  { title: 'Subaru' },
  { title: 'Suzuki' },
  { title: 'Uknown OEM - Sumaré' },
  { title: 'Wanlong Suzhou' },
  { title: 'Wick, John' }
];
$('.ui.search').search({
  source: content
});
