package onlineBookStore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import onlineBookStore.entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Long> {

}
