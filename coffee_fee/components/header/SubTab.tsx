import { ISubMenu } from '@/types/common';

interface IProps {
  titleTab: string;
  listSub: ISubMenu[];
}

const SubTab = ({ titleTab, listSub }: IProps) => {
  return (
    <div>
      <h4 className="font-bold text-green-700 mb-2">{titleTab}</h4>
      {listSub.map((u) => {
        return (
          <ul className="space-y-2" key={u.key}>
            <li>
              <a href="#" className="text-gray-700 hover:text-primary-normal">
                {u.title}
              </a>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default SubTab;
