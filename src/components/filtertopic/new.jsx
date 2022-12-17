import { Select } from 'antd';

const data = [
  {
    value: 'china',
    label: 'China',
    children: [
      {
        value: 'beijing',
        label: 'Beijing',
      },
      {
        value: 'shanghai',
        label: 'Shanghai',
      },
    ],
  },
  {
    value: 'usa',
    label: 'USA',
    children: [
      {
        value: 'new york',
        label: 'New York',
      },
      {
        value: 'san francisco',
        label: 'San Francisco',
      },
    ],
  },
];

 export function App() {
  return (
    <Select
      showSearch
      style={{ width: 200 }}
      placeholder="Select a country"
      optionFilterProp="children"
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      render={(menu) => (
        <>
          {menu}
          <div style={{ marginTop: 8 }}>
            <a href="#">All countries</a>
          </div>
        </>
      )}
    >
      {data.map((item) => (
        <Select.Option key={item.value} value={item.value}>
          {item.label}
        </Select.Option>
      ))}
    </Select>
  );
}