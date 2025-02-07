# Sử dụng image node chính thức
FROM node:18-alpine

# Thiết lập thư mục làm việc
WORKDIR /app

# Copy toàn bộ package.json và package-lock.json vào container
COPY package*.json ./

# Đảm bảo NODE_ENV không bỏ qua devDependencies
ENV NODE_ENV=development

# Cài đặt tất cả dependencies, bao gồm cả devDependencies
RUN npm install --production=false

# Copy toàn bộ source code vào container
COPY . .

# Thiết lập lại môi trường production sau khi cài đặt dependencies
ENV NODE_ENV=production

# Build project (nếu cần)
RUN npm run build

# Chạy ứng dụng
CMD ["npm", "start"]


