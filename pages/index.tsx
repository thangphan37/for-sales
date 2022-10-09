import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const data = [
  'Hãy xây dựng một cơ thể khoẻ mạnh qua việc tập thể dục thường xuyên',
  'Ngừng xem phim khiêu dâm vì nó sẽ phá huỷ bộ não của bạn',
  'Thay vì sử dụng phim khiêu dâm, thuốc lắc, rượu hãy học cách làm ntn để điều khiển thoả hiệp với cảm xúc của bạn',
  'Chế độ ăn uống sẽ ảnh hưởng tới cơ thể, năng lượng và phong độ của bạn. Cẩn thận với những gì bạn ăn',
  'Bạn có thể đảo ngược quá trình lão hoã bằng việc dành nhiều time hơn cho cơ thể của mình',
  'Bố mẹ của bạn đã làm hết sức những gì họ được dạy, hãy tha thứ và yêu thương họ.',
  'Gọi điện cho bố mẹ của bạn. Bỏ thời gian với họ, Bạn sẽ không có nhiều time với họ như bạn tưởng.',
  'Thiết lập tự động một khoản tiết kiệm hàng tháng. Dùng tiền để đầu tư. Nó sẽ giúp bạn giàu sang ở tương lai.',
  'Tập trung vào việc luyện tập, xây dựng hơn là ăn chơi.',
  'Tập trung ít đi vào việc kiếm tiền, nhiều đi vào việc giúp người khác nhiều nhất khi bạn có thể.',
  'Xe hơi, quần áo, đồng hồ, nhà là một trò chơi trạng thái, cộng đồng, sức khoẻ , những gì bạn thích và các mối quan hệ mới thực sự là phú quý.',
  'Bạn ko cần đúng ở lần đầu. Hãy thất bại nhanh nhất có thể.',
  'Không bao giờ so sánh bản thân bạn với người khác. Đặc biệt với những người ở trên mạng xã hội.',
  'Đẩy bạn thân bạn với những người bạn có thể phát triển cùng, cùng tầm nhìn với bạn.',
  'Sự ảnh hưởng của bạn được được xác định bởi có bao nhiêu thứ mà người khác thú vị ở bạn.',
  'Thu nhập của bạn được xác định bởi có bao nhiều người bạn có thể giúp đỡ và cách  bạn giúp đỡ họ.',
  'Giá trị thực sự của bạn được xác định bởi những giá trị mà bạn có thể mang lại hơn là số tiền bạn được trả.',
  'Học cách để tranh luận thứ mà ít người làm được.',
  'Thời gian rất quan trọng bạn có thể tiêu tiền nhưng đừng phung phí thời gian.',
  'Tìm kiếm những điều không thoải mái bởi vì đó là cách duy nhất mà bạn có thể phát triển.',
  'Cách để cho đi hiệu quả là luôn rộng mở để đón nhận.',
]

const heros = [
  'Thiết lập kế hoạch của bạn và đi ngủ vào 9h tối thức dậy vào 4h sáng',
  'Ngưng bao biện bản thân và bắt đầu tập thể dục 30 phút mỗi ngày',
  'Chứa 2 trứng và hoa quả trong chế độ ăn uống mỗi ngày để cải thiện sức khoẻ của bạn',
  'Ưu tiên tắm nước lạnh một ngày, nó sẽ thúc đẩy phong độ của bạn',
  'Hãy Lắng nghe nhiều hơn là bạn nói và học từ những người khác',
  'Học để nói Không và hãy bận rộn để suy nghĩ về cách bạn nên kiếm tiền',
  'Cố gắng và đọc 50+ trang sách để trau dồi tư duy của bạn',
  'Học 1 kỹ thuật mới mỗi 3 tháng và bỏ thêm 90 ngày để phát triển nó.',
  'Thiết lập việc đi bộ vào mỗi sáng, uống 2 cốc nước sau khi thức dậy.',
  'Ngủ 1 phần tư trong ngày để có thể tái khởi động lại phong độ của bạn.',
  'Tránh xa điện thoại của bạn và xoá các ứng dụng mạng xã hội để tiết kiệm thời gian cho bản thân bạn.',
  'Tránh sex đặc biệt trong giai đoạn bạn đang luyện tập, phát triển',
  'Không cố làm người khác vui ít nhất trong vòng 6 tháng để tập trung rèn luyện bản thân',
  'Không xem tin tức, chính trị trong vòng 1000h và dành time để nghỉ ngơi',
  'Kiếm nhiều tiền, đầu tư vào bản thân và mua bất cứ thứ gì phát triển bạn mà không cần nhìn giá',
  'Ưu tiên 4h làm việc tập trung hơn là 8h bận rộn và 4h dành thời gian để cải thiện bản thân',
  'Dành thời gian cho bạn bè và gia đình cuối tuần.',
]
const Home: NextPage = () => {
  return (
    <div>
      <section>
        <h1>Những thứ mà tôi biết ở tuổi 42 và tôi ước tôi biết ở tuổi 22:</h1>
        <ol>
          {data.map((d, idx) => (
            <li key={idx}>{d}</li>
          ))}
        </ol>
      </section>
      <section>
        <h1>
          Trong vòng 6 tháng bạn có thể chuyển hoá bản thân thành 1 người hùng
          đây là cách:
        </h1>
        <ol>
          {heros.map((d, idx) => (
            <li key={idx}>{d}</li>
          ))}
        </ol>
      </section>
    </div>
  )
}

export default Home
