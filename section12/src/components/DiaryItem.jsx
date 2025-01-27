import "./DiaryItem.css";
import { getEmotionImage } from "./../util/get-emotion-image";
import Button from "./Button";

const DiaryItem = () => {
  const emotionId = 2;

  return (
    <div className="DiaryItem">
      <div className={`img_section img_section_${emotionId}`}>
        <img src={getEmotionImage(2)} />
      </div>
      <div className="info_section">
        <div className="create_date">{new Date().toLocaleString()}</div>
        <div className="content">일기 컨텐츠</div>
      </div>
      <div className="button_section">
        <Button text={"수정하기"} />
      </div>
    </div>
  );
};

export default DiaryItem;
